import React, { useState } from "react";

export default function ToggleText() {
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {toggle && inputValue == "hello" && <h1>HELLO TEXT</h1>}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type='text'
        placeholder='hello'
      />
      <button onClick={() => setToggle((prev) => !prev)}>click me</button>
    </div>
  );
}
