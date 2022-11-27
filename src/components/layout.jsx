import React from "react";
import { useState } from "react";
import "./layout.css";
export default function Layout() {
  const [nam, setNam] = useState("");
  const [dis, setDis] = useState("");
  const [num, setNum] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let val = nam;
    console.log(val);
    console.log(num);
    setDis(val);
  };
  return (
    <div>
      <div className="nav">
        <h1>Text duper</h1>
      </div>
      <div className="body">
        <div className="fom">
          <form onSubmit={handleSubmit}>
            <label htmlFor="num">number</label>
            <input
              type="number"
              id="num"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
            <br></br>
            <label htmlFor="howm">text</label>
            <input
              type="text"
              id="howm"
              value={nam}
              onChange={(e) => setNam(e.target.value)}
            />
            <input type="submit" />
          </form>
        </div>
        <div className="display">
          <p>{dis}</p>
        </div>
      </div>
    </div>
  );
}
