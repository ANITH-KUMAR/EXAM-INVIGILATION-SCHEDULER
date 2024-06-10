import React, { useEffect, useState } from 'react';

function Staffsel() {
 const [facdet, setFacdet] = useState([]);

  useEffect(() => {
    const getuserdata = async () => {
       const reqData = await fetch("http://localhost:7000/apifac");
      const resData = await reqData.json();
      setFacdet(resData);
    }
    getuserdata();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "ActiveCaption" }}>FACULTY DETAILS</h1>
      <table style={{ borderCollapse: "collapse", width: "100%"}}>
        <thead>
          <tr>
          <th style={{ border: "2px solid black",textAlign:"center" }}>Give faculty Id</th>

            <th style={{ border: "2px solid black",textAlign:"center" }}>NAME</th>
            <th style={{ border: "2px solid black",textAlign:"center"}}>DEPARTMENT</th>
            <th style={{ border: "2px solid black",textAlign:"center" }}>EMAIL</th>
            <th style={{ border: "2px solid black",textAlign:"center" }}>ROLE</th>
          </tr>
        </thead>
        <tbody>
          {facdet.map((item, index) => (
            <tr key={index}>
               <td style={{ border: "1px solid black", textAlign: "center" }}><input style={{width:"20px"}}></input></td> 
              <td style={{ border: "1px solid black",textAlign:"center" }}>{item.name}</td>
              <td style={{ border: "1px solid black",textAlign:"center" }}>{item.dept}</td>
              <td style={{ border: "1px solid black",textAlign:"center" }}>{item.email}</td>
              <td style={{ border: "1px solid black",textAlign:"center" }}>{item.role}</td>
      
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Staffsel;
