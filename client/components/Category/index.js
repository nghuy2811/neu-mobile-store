import React from "react";

const Category = ({ data, onFilterCpuCores }) => {
  return (
    <div className="w-full px-4">
      {data.map((item, index) => (
        <div key={index} className="mb-8 last:mb-0">
          <h3 className="text-xl font-bold mb-4">{item.name}</h3>
          <ul>
            {item.data.map((category, index) => (
              <li key={index} className="text-base mb-2 last:mb-0">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value={category}
                    onChange={item.action}
                  />
                  <span className="pl-3">{`${category} ${item.mesurement}`}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Category;
