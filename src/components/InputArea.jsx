import React, { useState } from "react";

const InputArea = ({ addItem }) => {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleAdd() {
    if (inputText.length > 0) {
      addItem(inputText);
      setInputText("");
    }
  }

  const onEnterKey = (e) => {
    if(e.keyCode === 13) handleAdd();
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} onKeyDown={onEnterKey}/>
      <button onClick={handleAdd}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;
