import React from "react";

import CategoryItem from "./CategoryItem";

const Category = ({ data }) => {
  return (
    <div className="w-full px-4">
      {data.map((item, index) => (
        <CategoryItem key={index} categoryData={item} />
      ))}
    </div>
  );
};

export default Category;
