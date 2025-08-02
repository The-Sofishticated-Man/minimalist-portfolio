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
    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 border border-white/10 transition-all duration-300 hover:bg-white/8 hover:border-white/20 group">
      {/* Timeline indicator */}
      <div className="absolute -left-1.5 sm:-left-2 md:-left-3 lg:-left-4 top-4 sm:top-5 md:top-6 lg:top-6 xl:top-8 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 sm:border-2 md:border-3 lg:border-4 border-gray-900"></div>

      <div className="flex flex-col sm:flex-row sm:items-start mb-3 sm:mb-4 md:mb-5 lg:mb-6">
        <div className="relative mb-3 sm:mb-0 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 group-hover:scale-105 transition-transform duration-300 self-center sm:self-start">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-xl blur"></div>
          <div className="relative bg-white rounded-xl p-1.5 sm:p-2 md:p-2.5 lg:p-3 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 flex items-center justify-center overflow-hidden shadow-lg">
            <Image
              alt={`${university} logo`}
              src={img}
              className="object-contain"
              style={{ color: "transparent" }}
              priority={false}
            />
          </div>
        </div>
        <div className="flex-grow text-center sm:text-left">
          <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-white mb-1 group-hover:text-green-100 transition-colors duration-300">
            {title}
          </h3>
          <h4 className="text-sm sm:text-base md:text-base lg:text-lg text-green-400 font-medium mb-1">
            {university}
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 lg:mb-4">
            {duration}
          </p>

          <button
            className="inline-flex items-center px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 hover:from-green-500/30 hover:to-blue-500/30 text-green-300 hover:text-green-200 rounded-lg border border-green-400/30 transition-all duration-300 text-xs sm:text-sm font-medium"
            onClick={() => setShowingCourses(!isShowingCourses)}
          >
            {isShowingCourses ? "Hide Courses" : "View Courses"}
            <svg
              className={`ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${
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
        <div className="border-t border-white/10 pt-4 lg:pt-6 animate-in slide-in-from-top duration-300">
          <h5 className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 lg:mb-4 uppercase tracking-wide">
            Relevant Coursework
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
            {courses?.map((course, index) => (
              <div
                key={index}
                className="flex items-center p-2 lg:p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="mr-2 lg:mr-3 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-xs sm:text-sm">
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationArticle;
