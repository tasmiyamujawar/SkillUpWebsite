import React from "react";
import WorkImg from "../../assets/image-boy.webp";
import {MdCalendarViewMonth } from "react-icons/md";
import { TbToolsOff } from "react-icons/tb";
import { MdOutlineWifiCalling } from "react-icons/md";
import { SiStudyverse } from "react-icons/si";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] bg-gray-100">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div data-aos="flip-up">
                <img
                  src={WorkImg}
                  alt="course img"
                  className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  An Industry-Oriented Courses with 100% Job Guarantee
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-8"
                >
                  An exhaustive curriculum designed by our industry experts which will help you to get placed in your dream IT company
                  <br />
                </p>
                <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <MdCalendarViewMonth className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                      <p>Job Ready in 6 Month</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <TbToolsOff className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                      <p>5+ Tools</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      < MdOutlineWifiCalling className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                      <p> Unlimited Interview calls</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <SiStudyverse className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                      <p>Study materials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
