import React, { useState } from "react";
import "./Student.css";

const Student = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enterdAddress, setEnteredAddress] = useState("");
  const studentStubmitHandler = (event) => {
    event.preventDefault();
    setEnteredAddress("");
    setEnteredName("");
    setEnteredNumber("");
  };
  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const numberHandler = (event) => {
    setEnteredNumber(event.target.value);
  };
  const addressHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  return (
    <div className="student">
      <div>
        <h1>Student Manager</h1>
        <h2>All students: </h2>
      </div>
      <form onSubmit={studentStubmitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            id="mobile"
            value={enteredNumber}
            onChange={numberHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={enterdAddress}
            onChange={addressHandler}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Student;
