import React, { useState, useEffect } from 'react';
import DynamicTable from './DynamicTable';

const Preptable = () => {
  const [numRooms, setNumRooms] = useState(0);
  const [numDays, setNumDays] = useState(0);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    generateTableData(numRooms, numDays);
  }, [numRooms, numDays]);

  const handleKeyPress = (e, setter) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setter(value);
    }
  };
  const generateTableData = (numRooms, numDays) => {
    if (numRooms === 0 || numDays === 0) {
      return;
    }

    // const maxValues = Math.max(numRooms, numDays);
    const newData = [['', ...Array(numRooms).fill().map((_, i) => i < numRooms ? `room${i + 1}` : `day${i - numRooms + 1}`)]];
    const board = Array(numDays).fill().map(() => Array(numRooms).fill(0));

    solveTable(board, 0, 0, numRooms, numDays);

    for (let i = 0; i < numDays; i++) {
      const row = [`day${i + 1}`];
      for (let j = 0; j < numRooms; j++) { // Adjusted to numRooms instead of maxValues
        row.push(board[i][j] || '');
      }
      newData.push(row);
    }

    setTableData(newData);
  };


  const solveTable = (board, row, col, numRooms, numDays) => {
    if (row === numDays) {
      return true; // All rows filled, puzzle solved
    }

    if (col === numRooms) {
      return solveTable(board, row + 1, 0, numRooms, numDays); // Move to the next row
    }

    for (let num = 1; num <= Math.max(numRooms, numDays); num++) {
      if (isSafe(board, row, col, num, numRooms, numDays)) {
        board[row][col] = num;

        if (solveTable(board, row, col + 1, numRooms, numDays)) {
          return true; // Move to the next column
        }

        board[row][col] = 0; // Backtrack
      }
    }

    return false; // No valid number found for this cell
  };

  const isSafe = (board, row, col, num, numRooms, numDays) => {
    // Check if the number is already in the row
    for (let i = 0; i < numRooms; i++) {
      if (board[row][i] === num) {
        return false;
      }
    }

    // Check if the number is already in the column
    for (let i = 0; i < numDays; i++) {
      if (board[i][col] === num) {
        return false;
      }
    }

    return true;
  };

  return (
    <div>
      <h1 style={{textAlign:"center"}}>INVIGILATION SCHEDULE</h1>
      <div>
        <label htmlFor="numRooms">Number of Rooms:</label>
        <input
          type="number"
          id="numRooms"
          value={numRooms}
          onChange={(e) => handleKeyPress(e, setNumRooms)}
        />
      </div>
      <div>
        <label htmlFor="numDays">Number of Days:</label>
        <input
          type="number"
          id="numDays"
          value={numDays}
          onChange={(e) => handleKeyPress(e, setNumDays)}
        />
      </div>
      <DynamicTable tableData={tableData} />

      <strong>***This extra days colums will use as leave to that fculty </strong>
    </div>
  );
};

export default Preptable;



// import React, { useState, useEffect } from 'react';
// import DynamicTable from './DynamicTable';

// const Preptable = () => {
//   const [numRooms, setNumRooms] = useState(0);
//   const [numDays, setNumDays] = useState(0);
//   const [tableData, setTableData] = useState([]);

//   useEffect(() => {
//     generateTableData(numRooms, numDays);
//   }, [numRooms, numDays]);

//   const handleKeyPress = (e, setter) => {
//     const value = parseInt(e.target.value);
//     if (!isNaN(value)) {
//       setter(value);
//     }
//   };

//   const generateTableData = (numRooms, numDays) => {
//     const newData = [['', ...Array(numRooms).fill().map((_, i) => `room${i + 1}`)]];

//     for (let day = 1; day <= numDays; day++) {
//       const row = [`day${day}`];
//       const usedNumbers = new Set(); // to keep track of used numbers in the row
//       const usedNumbersColumns = new Array(numRooms + 1).fill(false); // to keep track of used numbers in columns
//       for (let room = 1; room <= numRooms; room++) {
//         let randomNumber;
//         do {
//           randomNumber = Math.floor(Math.random() * numRooms) + 1; // random number between 1 and numRooms
//         } while (usedNumbers.has(randomNumber) || usedNumbersColumns[randomNumber]);
//         usedNumbers.add(randomNumber);
//         usedNumbersColumns[randomNumber] = true;
//         row.push(randomNumber);
//       }
//       newData.push(row);
//     }

//     setTableData(newData);
//   };

//   return (
//     <div>
//       <h1>Dynamic Table Example</h1>
//       <div>
//         <label htmlFor="numRooms">Number of Rooms:</label>
//         <input
//           type="number"
//           id="numRooms"
//           value={numRooms}
//           onChange={(e) => handleKeyPress(e, setNumRooms)}
//         />
//       </div>
//       <div>
//         <label htmlFor="numDays">Number of Days:</label>
//         <input
//           type="number"
//           id="numDays"
//           value={numDays}
//           onChange={(e) => handleKeyPress(e, setNumDays)}
//         />
//       </div>
//       <DynamicTable tableData={tableData} />
//     </div>
//   );  
// };

// export default Preptable;

// import React, { useState, useEffect } from 'react';
// import DynamicTable from './DynamicTable';

// const Preptable = () => {
//   const [numRooms, setNumRooms] = useState(0);
//   const [numDays, setNumDays] = useState(0);
//   const [tableData, setTableData] = useState([]);

//   useEffect(() => {
//     generateTableData(numRooms, numDays);
//   }, [numRooms, numDays]);

//   const handleKeyPress = (e, setter) => {
//     const value = parseInt(e.target.value);
//     if (!isNaN(value)) {
//       setter(value);
//     }
//   };

//   const generateTableData = (numRooms, numDays) => {
//     const newData = [['', ...Array(numRooms).fill().map((_, i) => `room${i + 1}`)]];

//     for (let day = 1; day <= numDays; day++) {
//       const row = [`day${day}`];
//       const usedNumbers = new Set(); // to keep track of used numbers in the row
//       const usedNumbersColumns = new Array(numRooms + 1).fill(false); // to keep track of used numbers in columns
//       for (let room = 1; room <= numRooms; room++) {
//         let randomNumber;
//         do {
//           randomNumber = Math.floor(Math.random() * numRooms) + 1; // random number between 1 and numRooms
//         } while (usedNumbers.has(randomNumber) || usedNumbersColumns[randomNumber]);
//         usedNumbers.add(randomNumber);
//         usedNumbersColumns[randomNumber] = true;
//         row.push(randomNumber);
//       }
//       newData.push(row);
//     }

//     setTableData(newData);
//   };

//   return (
//     <div>
//       <h1>Dynamic Table Example</h1>
//       <div>
//         <label htmlFor="numRooms">Number of Rooms:</label>
//         <input
//           type="number"
//           id="numRooms"
//           value={numRooms}
//           onChange={(e) => handleKeyPress(e, setNumRooms)}
//         />
//       </div>
//       <div>
//         <label htmlFor="numDays">Number of Days:</label>
//         <input
//           type="number"
//           id="numDays"
//           value={numDays}
//           onChange={(e) => handleKeyPress(e, setNumDays)}
//         />
//       </div>
//       <DynamicTable tableData={tableData} />
//     </div>
//   );  
// };

// export default Preptable;


// import React, { useState } from 'react';
// import DynamicTable from './DynamicTable';

// const Preptable = () => {
//   const [numRooms, setNumRooms] = useState(0);
//   const [numDays, setNumDays] = useState(0);

//   const handleKeyPress = (e, setter) => {
//     const value = parseInt(e.target.value);
//     if (!isNaN(value)) {
//       setter(value);
//     }
//   };

//   const generateTableData = (numRooms, numDays) => {
//     const tableData = [['', ...Array(numRooms).fill().map((_, i) => `room${i + 1}`)]];

//     for (let day = 1; day <= numDays; day++) {
//       const row = [`day${day}`];
//       for (let room = 1; room <= numRooms; room++) {
//         // Generate random data for demonstration
//         row.push(Math.floor(Math.random() * numRooms) + 1); // random number between 1 and 5
//       }
//       tableData.push(row);
//     }

//     return tableData;
//   };

//   const tableData = generateTableData(numRooms, numDays);

//   return (
//     <div>
//       <h1>Dynamic Table Example</h1>
//       <div>
//         <label htmlFor="numRooms">Number of Rooms:</label>
//         <input
//           type="number"
//           id="numRooms"
//           value={numRooms}
//           onChange={(e) => handleKeyPress(e, setNumRooms)}
//         />
//       </div>
//       <div>
//         <label htmlFor="numDays">Number of Days:</label>
//         <input
//           type="number"
//           id="numDays"
//           value={numDays}
//           onChange={(e) => handleKeyPress(e, setNumDays)}
//         />
//       </div>
//       <DynamicTable tableData={tableData} />
//     </div>
//   );  
// };

// export default Preptable;




// import React, { useState } from 'react';
// import udo1 from './Screenshots/4sudo.png'; 
// import udo2 from './Screenshots/5sudo.png'; 
// import udo3 from './Screenshots/6sudo.png'; 
// import udo4 from './Screenshots/7sudo.png'; 
// import udo5 from './Screenshots/8sudo.png'; 
// import udo6 from './Screenshots/9sudo.png'; 
// import udo7 from './Screenshots/10sudo.png'; 

// function Imgloader() {
//   const [showButton, setShowButton] = useState(true);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleButtonClick = (image) => {
//     setShowButton(false);
//     // Simulate loading image asynchronously
//     setTimeout(() => {
//       setSelectedImage(image);
//       setImageLoaded(true);
//     }, 100); // 1 second delay for demonstration purposes
//   };

//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Exam schedule</h1>
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "50vh" }}>

//         {showButton && (
//           <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
//             <button style={{width:"120px"}} onClick={() => handleButtonClick(udo1)}>4*4 sudoku</button>
//             <button style={{width:"120px"}} onClick={() => handleButtonClick(udo2)}>5*5 sudoku</button>
//             <button style={{width:"120px"}} onClick={() => handleButtonClick(udo3)}>6*6 sudoku</button>
//             <button style={{width:"120px"}} onClick={() => handleButtonClick(udo4)}>7*7 sudoku</button>
//             <button  style={{width:"120px"}} onClick={() => handleButtonClick(udo5)}>8*8 sudoku</button>
//             <button  style={{width:"120px"}}onClick={() => handleButtonClick(udo6)}>9*9 sudoku</button>
//             <button style={{width:"120px"}} onClick={() => handleButtonClick(udo7)}>10*10 sudoku</button>
//           </div>
//         )}
//         {imageLoaded && (
//           <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
//             <img
//               style={{ justifyContent: "center", display: "block", margin: "auto",padding:"10px" }}
//               src={selectedImage}
//               alt="Placeholder"
//               width="100%"
//               height="100%"
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Imgloader;
