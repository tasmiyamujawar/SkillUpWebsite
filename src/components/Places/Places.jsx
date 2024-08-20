import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/PowerBI.png";
import Img2 from "../../assets/places/advanced-excel.jpg";
import Img3 from "../../assets/places/tableau.png";
import Img4 from "../../assets/places/vba.png";
import Img5 from "../../assets/places/Macros.jpeg";
import Img6 from "../../assets/places/sql.avif";

const PlacesData = [
  {
    img: Img1,
    title: "PowerBI",
    location: "Pune",
    description: "PowerBI is one of the most popular data visualisation & Work on 5+ Real life Data Projects with Mentor Support .",
    price: 35000,
    type: "Rate",
  },
  {
    img: Img2,
    title: "Advanced Excel",
    location: "Pune",
    description:
      "Master Microsoft Excel from Beginner to Advanced & Build a solid understanding on the Basics of Microsoft Excel.",
    price: 30000,
    type: "Rate",
  },
  {
    img: Img3,
    title: "Tableau",
    location: "Pune",
    description:
      "Tableau can help anyone see and understand their data. Connect to almost any database, drag and drop to create visualizations, and share with a click. .",
    price: 20000,
    type: "Rate",
  },
  {
    img: Img4,
    title: "VBA",
    location: "Pune",
    description: "Study Visual Basic for Applications (VBA) for automating tasks in Microsoft Office. Learn to write and debug VBA code for Excel and other Office applications.",
    price: 27000,
    type: "Rate",
  },
  {
    img: Img5,
    title: "Macros",
    location: "Pune",
    description:
      "Learn to create Excel macros for automating repetitive tasks. Understand VBA (Visual Basic for Applications) to enhance Excel functionality.",
    price: 25000,
    type: "Rate",
  },
  {
    img: Img6,
    title: "SQL",
    location: "Pune",
    description:
      "JUST COMPLETELY REDONE! Master SQL, Work With Complex Databases, Build Reports, and More!",
    price: 20000,
    type: "Rate",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Our Best Courses Here
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
