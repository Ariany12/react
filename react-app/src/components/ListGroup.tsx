import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Sao Paulo", "Tokio", "Paris", "London"];
  let selectedIndex = 0;
  //Usestate - hook - telling react that this component has data or state that will change over time
  const arr = useState(-1);

  return (
    <>
      <h1>List of Cities</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : " list-group-item"
            }
            key={item}
            onClick={() => {
              selectedIndex = index;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
