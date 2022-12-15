import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(todoItem, id) {
    setItems((prevList) => {
      return prevList.filter((item, index) => {
        return item + id !== todoItem;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              onCross={deleteItem}
              id={index}
              todoItem={todoItem}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
