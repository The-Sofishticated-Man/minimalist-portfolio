"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

function EducationArticle({
  title,
  entity: university,
  duration,
  img,
  courses,
}: {
  title: string;
  entity: string;
  duration: string;
  img: string | StaticImageData;
  courses?: string[];
}) {
  const [isShowingCourses, setShowingCourses] = useState(false);

  return (
    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:bg-white/8 hover:border-white/20 group">
      {/* Timeline indicator */}
      <div className="absolute -left-4 top-8 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-4 border-gray-900"></div>

      <div className="flex items-start mb-6">
        <div className="relative mr-6 group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-xl blur"></div>
          <div className="relative bg-white rounded-xl p-3 w-20 h-20 flex items-center justify-center overflow-hidden shadow-lg">
            <Image
              alt={`${university} logo`}
              src={img}
              className="object-contain"
              style={{ color: "transparent" }}
              priority={false}
            />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-semibold text-white mb-1 group-hover:text-green-100 transition-colors duration-300">
            {title}
          </h3>
          <h4 className="text-lg text-green-400 font-medium mb-1">
            {university}
          </h4>
          <p className="text-gray-400 text-sm mb-4">{duration}</p>

          <button
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 hover:from-green-500/30 hover:to-blue-500/30 text-green-300 hover:text-green-200 rounded-lg border border-green-400/30 transition-all duration-300 text-sm font-medium"
            onClick={() => setShowingCourses(!isShowingCourses)}
          >
            {isShowingCourses ? "Hide Courses" : "View Courses"}
            <svg
              className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                isShowingCourses ? "rotate-180" : "rotate-0"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.085l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {isShowingCourses && (
        <div className="border-t border-white/10 pt-6 animate-in slide-in-from-top duration-300">
          <h5 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wide">
            Relevant Coursework
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {courses?.map((course, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="mr-3 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">{course}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationArticle;
