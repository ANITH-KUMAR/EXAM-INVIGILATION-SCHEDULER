import React from 'react';

const DynamicTable = ({ tableData }) => {
  if (!tableData || tableData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <table style={{border:"2px solid black ",borderCollapse:"collapse"}}>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex} style={{border:"2px solid black ",borderCollapse:"collapse"}}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} style={{border:"2px solid black ",borderCollapse:"collapse",textAlign:"center"}}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;



// import React from 'react';

// const DynamicTable = ({ tableData }) => {
//   return (
//     <table style={{border:"2px solid black ",borderCollapse:"collapse"}}>
//       <thead style={{border:"2px solid black ",borderCollapse:"collapse"}} >
//         <tr style={{border:"2px solid black ",borderCollapse:"collapse"}}>
//           {/* Assuming the first row contains headers */}
//           {tableData[0].map((header, index) => (
//             <th key={index} style={{border:"2px solid black ",borderCollapse:"collapse"}}>{header}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {/* Skipping the first row as it's headers */}
//         {tableData.slice(1).map((rowData, rowIndex) => (
//           <tr key={rowIndex} style={{}}>
//             {rowData.map((cellData, cellIndex) => (
//               <td key={cellIndex} style={{border:"2px solid black ",borderCollapse:"collapse",textAlign:"center"}}>{cellData}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default DynamicTable;
