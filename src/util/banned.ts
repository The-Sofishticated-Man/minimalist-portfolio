import { headers } from "next/headers";
import { NextRequest } from "next/server";
import db from "./sqlite";

export async function checkUserBanStatus(ip: string): Promise<boolean> {
  try {
    const result = db
      .prepare("SELECT COUNT(*) as count FROM banned_ips WHERE ip = ?")
      .get(ip) as { count: number };
    return result.count > 0;
  } catch (error) {
    console.error("Error checking user ban status:", error);
    return false; // Default to not banned on error
  }
}

export async function checkCurrentUserBanStatus(): Promise<boolean> {
  try {
    const headersList = await headers();
    const forwarded = headersList.get("x-forwarded-for");
    const realIp = headersList.get("x-real-ip");
    const ip = forwarded
      ? forwarded.split(",")[0].trim()
      : realIp || "127.0.0.1";

    return await checkUserBanStatus(ip);
  } catch (error) {
    console.error("Error checking current user ban status:", error);
    return false; // Default to not banned on error
  }
}

export function banUserByIp(ip: string): boolean {
  try {
    // Check if IP is already banned to avoid duplicates
    const existingBan = db
      .prepare("SELECT COUNT(*) as count FROM banned_ips WHERE ip = ?")
      .get(ip) as { count: number };

    if (existingBan.count === 0) {
      db.prepare("INSERT INTO banned_ips (ip) VALUES (?)").run(ip);
      console.log(`IP ${ip} has been banned`);
    }
    return true;
  } catch (error) {
    console.error("Error banning IP:", error);
    return false;
  }
}

export function getCurrentUserIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwarded ? forwarded.split(",")[0].trim() : realIp || "127.0.0.1";
}
