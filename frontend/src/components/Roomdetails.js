import { useState,useEffect } from 'react';
import React from 'react'

function Roomdetails() {

 const [roomDet, setRoomDet] = useState([]);

 useEffect(() => {
   const getRoomData = async () => {
     try {
       const reqData = await fetch("http://localhost:7000/apiroom");
       const resData = await reqData.json();
       setRoomDet(resData);
     } catch (error) {
       console.error("Error fetching room data:", error);
     }
   };

   getRoomData();
 }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "ActiveCaption" }}>ROOM DETAILS</h1>
      <table style={{ borderCollapse: "collapse", width: "100%",tableLayout:"fixed" }}>
        <thead>
          <tr>
            <th style={{ border: "2px solid black", padding: "8px", textAlign: "center" }}>BLOCK</th>
            <th style={{ border: "2px solid black", padding: "8px", textAlign: "center" }}>FLOOR</th>
            <th style={{ border: "2px solid black", padding: "8px", textAlign: "center" }}>ROOM NO</th>
            {/* <th style={{ border: "2px solid black", padding: "8px", textAlign: "center" }}>ROLE</th> */}
          </tr>
        </thead>
        <tbody>
          {roomDet.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{item.block}</td>
              <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{item.floor}</td>
              <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{item.roomid}</td>
              {/* <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{item.role}</td> */}
      
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


}

export default Roomdetails