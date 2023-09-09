import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function TodoList({ question, age }) {
  const [nameValue, setNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [displayAge, setDisplayAge] = useState("");

  function btnClicked() {
    setDisplayName(nameValue);
    setDisplayAge(ageValue);

    if (ageValue < 18) {
      setDisplayAge(
        +ageValue +
          " years old.\n You're not eligible to access this site.\nPlease leave the site"
      );
    } else {
      setDisplayAge(
        +ageValue + " years old.\n You are eligible to enter this site"
      );
    }
  }

  return (
    <div
      style={{
        width: "100%",
        height: "25em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      className="container-fluid"
    >
      <h1
        style={{
          color: "#fff",
        }}
        className="display-6"
      >
        {question}
      </h1>
      <input
        type="text"
        placeholder="Input Your Name"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Input Your Age"
        value={ageValue}
        onChange={(e) => setAgeValue(e.target.value)}
        required
      />
      <button className="btn btn-info" onClick={btnClicked}>
        Enter
      </button>
      <h1
        className="display-6"
        style={{
          color: "#fff",
        }}
      >
        {"Your name is " + displayName}
      </h1>
      <h1
        className="display-6"
        style={{
          color: "#fff",
        }}
      >
        {"You are " + displayAge}
      </h1>
    </div>
  );
}

export default function DisplayList() {
  return <TodoList question={"Fill in the input fields below..."} age={16} />;
}
