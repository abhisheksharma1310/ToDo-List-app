import React, { useState } from "react";

const ToDoItem = ({ todoItem, onCross, id }) => {
  const [itemCross, setItemCross] = useState(false);

  function handleItemCross() {
    setItemCross(!itemCross);
  }

  return (
    <div className="listItem">
      <li
        onClick={handleItemCross}
        style={{ textDecorationLine: itemCross ? "line-through" : "none" }}
      >
        {todoItem}
      </li>
      <button
        onClick={() => {
          onCross(todoItem + id, id);
          setItemCross(false);
        }}
      >
        {itemCross ? "❌" : null}
      </button>
    </div>
  );
};

export default ToDoItem;
