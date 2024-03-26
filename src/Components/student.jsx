import React, { useState, useEffect } from "react";
import "./Student.css";

const Student = (props) => {
  const [firstCount, setCount] = useState(0);
  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [userList, setUserList] = useState(() => {
    const localvalue = localStorage.getItem("userList");
    if (localvalue == null) return [];
    return JSON.parse(localvalue);
  });

  useEffect(() => {
    const localvalue = localStorage.setItem(
      "userList",
      JSON.stringify(userList)
    );
    setCount(userList.length);
  }, [userList]);

  const studentSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredName.trim().length === 0 ||
      enteredAddress.trim().length === 0 ||
      enteredNumber.trim().length === 0
    ) {
      alert("Please enter valid input");
    } else {
      const newStudent = {
        id: Math.random().toString(),
        name: enteredName,
        number: enteredNumber,
        address: enteredAddress,
      };
      setUserList((prevUserList) => [...prevUserList, newStudent]);
      setEnteredAddress("");
      setEnteredName("");
      setEnteredNumber("");
    }
  };

  const deleteStudentHandler = (studentId) => {
    setUserList((prevUserList) =>
      prevUserList.filter((student) => student.id !== studentId)
    );
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
        <h2>All students: {firstCount}</h2>
      </div>
      <form onSubmit={studentSubmitHandler}>
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
            value={enteredAddress}
            onChange={addressHandler}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <ul>
        {userList.map((student) => (
          <li key={student.id}>
            {student.name} - {student.number} - {student.address}
            <button onClick={() => deleteStudentHandler(student.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Student;
