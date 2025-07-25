"use client";

import { useEffect, useState } from "react";

export default function Hello() {
  const [data, setData] = useState<null | object>(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div>
      <h1 data-testid='value-el'>{value}</h1>
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello, Next.js!</h1>
      {toggle && <div data-testid='toggle-div'>111</div>}
      <button data-testid='toggle-btn' onClick={handleToggle}>
        click me
      </button>
      <input onChange={(e) => setValue(e.target.value)} type='text' placeholder='input value ...' />
    </div>
  );
}
