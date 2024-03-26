import React, { useState } from "react";
const StudentList = (props) => {
  return (
    <div>
      <ul>
        {props.students.map((student, index) => {
          <li key={index}>
            {student.name}
            {student.number}
            {student.address}
          </li>;
        })}
      </ul>
    </div>
  );
};
export default StudentList;
