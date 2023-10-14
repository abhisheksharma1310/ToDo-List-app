import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

const getTodoItemsList = () => {
  const data = localStorage.getItem("todoItemsList");
  const list = JSON.parse(data);
  return list?.length > 0 ? list : [];
}

function App() {
  const [items, setItems] = useState(getTodoItemsList());

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

  useEffect(() => {
    localStorage.setItem("todoItemsList", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addItem} />
      <div>
        <ul className="todo-list-items">
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
