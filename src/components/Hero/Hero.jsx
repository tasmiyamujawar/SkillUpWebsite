import React from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);

  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm">
            Our Courses
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
               Search Your Courses
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                Search Courses Name
                </label>
                <input
                  type="text"
                  name="course"
                  id="course"
                  placeholder="PowerBI"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="course" className="opacity-70">
                  Joining Date
                </label>
                <input
                  type="date"
                  name="course"
                  id="course"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="course" className="opacity-70">
                  Location
                </label>
                <input
                  type="text"
                  name="course"
                  id="course"
                  placeholder="Type Here"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />          
              </div>
            </div>
            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
