import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setitem] = useState(true);

  function handleClk() {
    setitem(!item);
  }
  const itemClass = item ? "" : "in-cart";
  const btnClass = item ? "add" : "remove";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handleClk}>
        {item ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
