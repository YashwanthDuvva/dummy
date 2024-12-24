import React, { useState } from "react";

function List() {
  const [clickedItem, setClickedItem] = useState(false);
  function isClicked() {
    setClickedItem(!clickedItem); 
  }

  return (
    <li
      style={{ textDecoration: clickedItem ? "line-through" : "" }}
      onClick={isClicked}
    >
      hello
    </li>
  );
}

export default List;
