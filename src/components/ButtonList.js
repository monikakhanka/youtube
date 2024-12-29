import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Gaming",
    "Songs",
    "Music",
    "Learning",
    "Business",
    "Reading",
    "Painting",
    "Cooking",
    "Comedy",
    "Dancing",
  ];
  return (
    <div className="flex mt-4">
      {buttonNames.map((buttonName) => (
        <Button key={buttonName} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
