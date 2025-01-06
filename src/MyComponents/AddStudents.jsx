import { useState } from "react";
import React from 'react'

export default function AddStudent({addItems}) {
  const [sname, setSname] = useState("");
  const [rollno, setRollno] = useState("");
  const [desc, setDesc] = useState("");
  
  const submit = (e) => { 
    e.preventDefault();
    if (!sname || !rollno || !desc) {
      alert("please fill the value into input");
    } else {
      addItems(sname, rollno, desc);
      setSname("");
      setRollno("");
      setDesc("");
    }
  };
 
  function userHandler(e){
    const inputValues = e.target.value;
  const isAlphabet = /^[A-Za-z]*$/;
  if (isAlphabet.test(inputValues)) {
    setSname(inputValues);
  } else {
    console.log("Input must contain only letters (A-Z, a-z)");
  }
  }

  function userHandlerroll(e){
    const inputValuer = e.target.value;
    if (isNaN(inputValuer)) {
      console.log("Input must be a number");
      return;
  }
  if (inputValuer.length > 2) {
    console.log("roll number is not greater than 99");
    return;
}
  setRollno(inputValuer);
  }
    

  return (
    <div className="container mt-4">
      <h2 className="text-center mt-3">Add New Student</h2>
       <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="FullName" className="form-label">
            FullName
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            id="FullName"
            value={sname}
            onChange={userHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Roll no
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
             placeholder="Enter Your Roll No"
            aria-describedby="emailHelp"
            value={rollno}
            onChange={userHandlerroll}
          />
          
        </div>
       
        <div className="mb-3">
          <label htmlFor="BDate" className="form-label">
           Description
          </label>
          <input
            type="text"
            className="form-control"
            value={desc}
             placeholder="Enter Your Description"
            onChange={(e) => {
              return setDesc(e.target.value);
             
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </form>
    </div>
  );
};

