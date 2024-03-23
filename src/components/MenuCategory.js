import React, { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({ data, showAccordion, setAccordionIndex }) => {
  //console.log(data);
  //console.log(data?.data?.title);
  const handleClick = () => {
    setAccordionIndex();
  };

  return (
    <div className="text-white">
      <div
        className="flex  justify-between bg-green-500 text-black font-semibold shadow-md shadow-white text-xl p-4  w-5/12 my-4 mx-auto"
        onClick={handleClick}
      >
        <span>
          {data?.title}({data?.itemCards?.length})
        </span>
        <span>&#x21A1;</span>
      </div>
      {showAccordion && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default MenuCategory;
