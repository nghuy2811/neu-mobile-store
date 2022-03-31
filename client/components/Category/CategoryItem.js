import React, { useRef, useEffect, useState, useCallback } from "react";

import styles from "./style.module.scss";

const CategoryItem = ({ categoryData }) => {
  const listRef = useRef(null);
  const [listHeight, setListHeight] = useState(0);
  const [isShowCategoryList, setIsShowCategoryList] = useState(false);

  useEffect(() => {
    if (isShowCategoryList) {
      if (listRef.current) {
        setListHeight(listRef.current.offsetHeight);
      }
    } else setListHeight(0);
  }, [isShowCategoryList]);

  const handleClickCategory = useCallback(() => {
    setIsShowCategoryList(!isShowCategoryList);
  }, [isShowCategoryList]);

  return (
    <div className={styles["category-wrapper"]}>
      <h3
        className={`${styles["heading-category"]} ${
          isShowCategoryList && styles["show-category"]
        }`}
        onClick={handleClickCategory}
      >
        {categoryData.name}
        <span></span>
      </h3>
      <div
        className={styles["category-list"]}
        style={{ maxHeight: `${listHeight}px` }}
      >
        <ul ref={listRef} className="pt-4 flex flex-wrap">
          {categoryData.data.map((category, index) => (
            <li key={index} className="text-base mb-2 last:mb-0 w-1/2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value={category}
                  onChange={categoryData.action}
                />
                <span className="pl-3">{`${category} ${categoryData.mesurement}`}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryItem;
