import React, { useRef, useEffect, useState, useCallback } from "react";

import styles from "./style.module.scss";

const CategoryPurpose = ({ onStudyAndWorkFilter, onEntertainmentFilter }) => {
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
        Nhu cầu
        <span></span>
      </h3>
      <div
        className={styles["category-list"]}
        style={{ maxHeight: `${listHeight}px` }}
      >
        <ul ref={listRef} className="pt-4 flex flex-wrap">
          <li className="text-base mb-4 w-1/2 md:w-full last:mb-0">
            <label className="flex items-center">
              <input
                type="checkbox"
                value={1}
                onChange={onStudyAndWorkFilter}
              />
              <span className="pl-3">Học tập và làm việc</span>
            </label>
          </li>
          <li className="text-base mb-4 w-1/2 md:w-full last:mb-0">
            <label className="flex items-center">
              <input
                type="checkbox"
                value={1}
                onChange={onEntertainmentFilter}
              />
              <span className="pl-3">Giải trí</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryPurpose;
