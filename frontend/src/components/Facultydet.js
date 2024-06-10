// import React, { useEffect, useState } from 'react';

// function Facultydet() {
//  const [facdet, setFacdet] = useState([]);

//   useEffect(() => {
//     const getuserdata = async () => {
//        const reqData = await fetch("http://localhost:7000/apifac");
//       const resData = await reqData.json();
//       setFacdet(resData);
//     }
//     getuserdata();
//   }, []);

//   return (
//     <div>
//       <h1 style={{ textAlign: "center", color: "ActiveCaption" }}>FACULTY DETAILS</h1>
//       <table style={{ borderCollapse: "collapse", width: "100%",tableLayout:"fixed" }}>
//         <thead>
//           <tr>
//             <th style={{ border: "2px solid black", padding: "8px", textAlign: "center" }}>NAME</th>
//             <th style={{ border: "2px solid black", padding: "8px", textAlign: "center" }}>DEPARTMENT</th>
//             <th style={{ border: "2px solid black", padding: "8px", textAlign: "center" }}>EMAIL</th>
//             <th style={{ border: "2px solid black", padding: "8px", textAlign: "center" }}>ROLE</th>
//           </tr>
//         </thead>
//         <tbody>
//           {facdet.map((item, index) => (
//             <tr key={index}>
//               <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{item.name}</td>
//               <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{item.dept}</td>
//               <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{item.email}</td>
//               <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{item.role}</td>
      
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Facultydet;


import React, { useEffect, useState } from 'react';

function Facultydet() {
  const [facdet, setFacdet] = useState([]);
  const [renderedItems, setRenderedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const reqData = await fetch("http://localhost:7000/apifac");
      const resData = await reqData.json();
      setFacdet(resData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < facdet.length) {
        setRenderedItems(prevItems => [...prevItems, facdet[index]]);
        index++;
      } else {
        clearInterval(timer); // Clear the interval once all items are rendered
      }
    }, 100); // 1000 milliseconds delay for each item

    return () => clearInterval(timer);
  }, [facdet]);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "ActiveCaption" }}>FACULTY DETAILS</h1>
      <table style={{ borderCollapse: "collapse", width: "100%", tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ border: "2px solid black", padding: "8px", textAlign: "center" }}>NAME</th>
            <th style={{ border: "2px solid black", padding: "8px", textAlign: "center" }}>DEPARTMENT</th>
            <th style={{ border: "2px solid black", padding: "8px", textAlign: "center" }}>EMAIL</th>
            <th style={{ border: "2px solid black", padding: "8px", textAlign: "center" }}>ROLE</th>
          </tr>
        </thead>
        <tbody>
          {renderedItems.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{item && item.name}</td>
              <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{item && item.dept}</td>
              <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{item && item.email}</td>
              <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{item && item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Facultydet;
