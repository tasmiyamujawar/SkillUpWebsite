import React from "react";
import BlogCard from "./BlogCard";
import Img10 from "../../assets/places/img10.png";
import Img11 from "../../assets/places/img11.png";
import Img12 from "../../assets/places/img12.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img10,
    title: "Cummins, 10LPA",
    description:
    "Vishwjeet Sawant BCOM Student placed at CUMMINS",
    author: "SkillUp",
    date: "April 02, 2024",
  },
  {
    id: 1,
    image: Img11,
    title: "WNS, 7LPA",
    description:
      "Gaytri Patil Btech Student placed at WNS",
    author: "SkillUp",
    date: "May 23, 2024",
  },
  {
    id: 1,
    image: Img12,
    title: "Bajaj Allianz, 4LPA",
    description:
      "Amruta Male MCOM Student placed at BAJAJ ALLIANZ",
    author: "SkillUP",
    date: "Jun 12, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Our Recently Placed Students
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
