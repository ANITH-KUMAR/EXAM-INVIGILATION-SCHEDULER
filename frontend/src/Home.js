
import React, { useState } from 'react';
import pm1 from './Screenshots/pm1.png'; 
import About from './components/About';
import Roomdetails from './components/Roomdetails';
import Facultydet from './components/Facultydet';
import Usermanual from './components/Usermanual';
import { Link } from 'react-router-dom';

function Home() { 
  const [cho, setCho] = useState(0);
  const [buttonColors, setButtonColors] = useState(["white", "white", "white", "white", "white"]);

  function handleclick(x) {
    setCho(x);
    const newButtonColors = ["white", "white", "white", "white", "white"];
    newButtonColors[x - 1] = "#34e8eb";
    setButtonColors(newButtonColors);
  }

  function Fun() {
    if (cho === 1)
      return <About />;
    else if (cho === 2)
      return <Facultydet />;
    else if (cho === 3)
      return <Roomdetails />;
    else if (cho === 4)
      return <Usermanual />;
      
  }
  
  return (   
    <div className="main" style={{ backgroundColor:"#34eba1" }}>
      <div className='heading' style={{ display:"flex", alignItems:"center", justifyContent:"center", color:"brown" }}>
        <h1 style={{ textAlign:"center" }}><strong>EXAM INVIGILATION SCHEDULER</strong></h1> 
        <img src={pm1} alt="img" style={{ width:"100px" }} />
      </div>
      <marquee style={{ color:"#3236a8" }}><strong>Welcome to Exam Invigilation </strong></marquee>
       <div style={{ display:"flex", backgroundColor:"#67786c",height:"100vh" }}>
        <div className='navbar' style={{ width:"25%", height:"50vh", display:"flex", alignItems:"center", flexDirection:"column" }}>
          <button onClick={() => handleclick(1)} style={{ color:"black", width:"60%", marginBlock:"10px", background: buttonColors[0] }}>About</button>
          <button onClick={() => handleclick(2)} style={{ color:"black", width:"60%", marginBlock:"10px", background: buttonColors[1] }}>Faculty details</button>
          <button onClick={() => handleclick(3)} style={{ color:"black", width:"60%", marginBlock:"10px", background: buttonColors[2] }}>Room details</button>
          <button onClick={() => handleclick(4)} style={{ color:"black", width:"60%", marginBlock:"10px", background: buttonColors[3] }}>User manual</button>
           <Link to="/main" style={{ color:"black", width:"60%", marginBlock:"10px", background: "white",textDecoration:"none",border:"1px solid black"} }>Prepare invigilation schedule</Link>
        </div>
        <div className='page' style={{ paddingLeft:"10px", paddingRight:"10px", background:"#a89332", height:"100%", width:"75%" }}>
          <Fun />
        </div>
      </div> 
    </div>
  );
}

export default Home;



