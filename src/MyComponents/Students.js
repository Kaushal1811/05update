import React from "react";
import Student_info from "./Student_info"

export default function Students(props) {
  console.log(props.fourstar);

  return (

    <>{props.fourstar.length===0? (
        <div className="alert alert-warning" role="alert">
          <h1>No Students Record</h1>
        </div>
      ) : (

        props.fourstar.map((item) => {
          return (
            <Student_info  fivestar={item}
            key={item.rollno}
            deler={props.onDele} 
            onAllSac={props.onAllSac}
            />
          );
        })
      )}

      </>
  );
}
