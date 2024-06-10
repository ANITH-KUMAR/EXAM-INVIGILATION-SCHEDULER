import React from 'react'
import selectedImage from '../Screenshots/main1.png'; 
function Usermanual() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>TERMS AND FUNCTIONALITIES</h1>
      <strong>wroking process of the website:</strong>
       <p><strong>structure</strong>:The main page has been divided into three modules
       </p>
       <p><b>1:</b> This module is used for diplaying the exam schedule image according to your input capacity </p>
       <p><b>2:</b> In this module we need to select the required faculty according to the prepared schedule</p>
       <p><b>3:</b>This module is used to send emails to the respected faculty members according to the prepared schedule.This Email will display the invigilation room details and the day of the exam.</p>
       {/* <p><b>Terms:</b>This is an static website so we have restricted to max 10 faculty and 10 rooms at a time
            </p>  */}
            {/* <strong style={{paddingLeft:"20px",display:"inline"}}>condition:</strong>
            <p> </p> */}
        
        <img
              style={{ justifyContent: "center", display: "block", margin: "auto",padding:"10px" }}
              src={selectedImage}
              alt="Placeholder"
              width="50%"
              height="50%"
            />

      <b>***once you click on prepare invigilation schedule you will redirect to above mentioned main page </b>
    
    </div>
  )
}

export default Usermanual