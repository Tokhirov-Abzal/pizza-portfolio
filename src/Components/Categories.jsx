import React, { useState } from "react";

const Categories = ({ items, onCat }) => {
  const [activeItems, setActiveItems] = useState(null);

  const onSelectItems = (index) => {
    setActiveItems(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItems(null)}
          className={activeItems == null ? "active" : ""}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItems === index ? "active" : ""}
              onClick={() => setActiveItems(index)}
              key={index}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
