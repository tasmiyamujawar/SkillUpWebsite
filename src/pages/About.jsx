import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          SkillUP Technologies and Institutions is one of the most prominent educational institutions which is affordable as well as provides high-quality services. Established in the year 2021 we are keen on providing the best IT services. We upgrade ourselves as per the trends and demands of the ongoing situations. We are popular for providing high-quality technical Internships on technologies like PowerBI, Advanced EXcel, VBA, SQL, Macros, Cloud and many more.
          </p>
          <br />
          <p>
          Imtiyaz Desai
          He is the Director of SkillUP and have more than 5 years of experience in PowerBI, Excel and VBA.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
