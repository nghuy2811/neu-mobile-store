import React from "react";

import CategoryItem from "./CategoryItem";
import CategoryPurpose from "./CategoryPurpose";

const Category = ({ data, onStudyAndWorkFilter, onEntertainmentFilter }) => {
  return (
    <div className="w-full px-4">
      {data.map((item, index) => (
        <CategoryItem key={index} categoryData={item} />
      ))}
      <CategoryPurpose
        onStudyAndWorkFilter={onStudyAndWorkFilter}
        onEntertainmentFilter={onEntertainmentFilter}
      />
    </div>
  );
};

export default Category;
