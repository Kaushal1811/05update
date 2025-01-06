import React, { useState } from "react";

export default function Students_info({ fivestar, deler, onAllSac }) { 
const [edit,setEdit] = useState(true)
const [sname,setSname] = useState(fivestar.sname)
const [rollno,setRollno] = useState(fivestar.rollno)
const [desc,setDesc] = useState(fivestar.desc)


const onEdet = () => {
    setEdit(!edit)
    onAllSac(sname,rollno,desc, fivestar)
}

  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3>Student Name: {" "}
            {edit ? (
                fivestar.sname
            ) : (
                   <input 
                 type="text"
                 value={sname}
                 onChange={(e) => setSname(e.target.value)}
                 />
            )
            }   
         </h3>
            <h3>Student Rollno:  {" "}
            {edit ? (
                fivestar.rollno
            ) : (
                   <input 
                 type="number"
                 
                 value={rollno}
                 onChange={(e) => setRollno(e.target.value)}
                 />
            )
            } 

            </h3>
            <h3>Student Descrition:   {" "}
            {edit ? (
                fivestar.desc
            ) : (
                   <input 
                 type="text"
                 value={desc}
                 onChange={(e) => setDesc(e.target.value)}
                 />
            )
            }
             </h3>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                deler(fivestar)
              }}
            >
              Delete
            </button>
            </div>

            <div className="col-3 d-flex align-items-center justify-content-start">
            <button
            onClick={onEdet}
              type="button"
              className="btn btn-primary" 
            >
              {edit ? "Edit" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
