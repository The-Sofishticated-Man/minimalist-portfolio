"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
function ExperienceArticle({
  title,
  entity: company,
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
    <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600 mb-10">
      <div className="flex items-start mb-2">
        <div className="bg-white rounded-full p-2 mr-4 w-24 h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
          <Image
            alt={`${company} logo`}
            src={img}
            className="object-contain"
            style={{ color: "white" }} 
            priority={false}
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-semibold text-gray-100">{title}</h3>
          <h4 className="text-l text-gray-200">{company}</h4>
          <p className="text-gray-400">{duration}</p>
          <button
            className=" hover:underline mb-2"
            onClick={() => setShowingCourses(!isShowingCourses)}
          >
            {isShowingCourses ? "Hide Courses" : "View Courses"}
            <svg
              className={`inline-block ml-2 transition-transform duration-200 ${
                isShowingCourses ? "rotate-90" : "rotate-0"
              }`}
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.085l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isShowingCourses && (
            <ul className="space-y-2 text-gray-300 mx-4">
              {courses?.map((course, index) => {
                return (
                  <li className="flex items-start" key={index}>
                    <span className="mr-2 mt-1.5 text-gray-500">•</span>
                    <span>{course}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExperienceArticle;
