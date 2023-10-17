import React, { useState } from "react";
import "./_categoriesbar.scss";

const keywords = [
  "All",
  "Galatasaray",
  "Icardi",
  "React",
  "React Native",
  "Javascript",
  "Java",
  "Spring",
  "SQL",
  "What is API ?",
  "Crotia 0 - 1 Turkey",
  "Football",
  "Use of api",
  "ChatGpt",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <div className="CategoriesBar">
      {keywords.map((value, i) => (
        <span
          id="categories"
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
