import React, {useState} from "react";

function Item({ name, category }) {
  const [remove, setRemoved] = useState(false)
  const className = (remove ? "in-cart":"")
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={className} onClick={() => setRemoved(remove => !remove)}>Add to Cart</button>
    </li>
  );
}

export default Item;
