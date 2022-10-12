import React, {useState} from "react";
import Item from "./Item";




function ShoppingList({ items }) {
  const [shownItems, setShownItems] = useState([...items])

  const filterItems = (category) => {
    const newItems = items.filter(item => {
      if (category === "All") return true
      return (item.category === category)
    })
    return newItems
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={event => {setShownItems(shownItems => filterItems(event.target.value))}}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {shownItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
