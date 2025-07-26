import MainInfo from "../components/MainInfo";
import SecondaryInfo from "../components/SecondaryInfo";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <MainInfo />
      <SecondaryInfo />
    </div>
  );
}
