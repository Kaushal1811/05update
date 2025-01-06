import './App.css';
import React from 'react';
import Students from './MyComponents/Students';
import {useState,useEffect} from 'react';
import AddStudent from './MyComponents/AddStudents';

function App() {

  
  let initStud;
  if(localStorage.getItem("aakar")===null)
  {
    initStud =[]
  }
  else {
    initStud=JSON.parse(localStorage.getItem("aakar"))
  }

  const [aakar,setAakar]=useState(initStud); 
 
  useEffect(()=>{
    localStorage.setItem("aakar",JSON.stringify(aakar))
  },[aakar])

  const deler=(fivestar)=>{
    console.log("I am On Delete",fivestar);
    setAakar(aakar.filter((e)=>{return e!==fivestar}))
  }
  
  const addItems = (sname,rollno,desc) => {
    const newStudent = {
      sname: sname,
      rollno: rollno,
      desc: desc,
    };

    setAakar([...aakar, newStudent]);
    }

    const onAllSac = (sname, rollno, desc, fivestar) => {
      setAakar(
        aakar.map((unit)=>{
          if (unit === fivestar) {
            return {
              ...fivestar,
              sname: sname,
              rollno: rollno,
              desc: desc,
            };
          }
            else {
              return unit;
            }
          })
      );
    };
      
 
  return (
    <>
    <AddStudent addItems={addItems}/>
    <Students fourstar={aakar} onDele={deler}  onAllSac={onAllSac}/>

    </>

  );
}

export default App;
