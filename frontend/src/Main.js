import React from 'react'
import Preptable from './Preptable';
import Staffsel from './staffsel';
import { Emailsender } from './emailsender';
function Main() {
  return (
    <div class="main">
                <div style={{margin:"opx",padding:"30px",backgroundColor:"#eda258",width:"auto",height:"auto",alignItems:"center",justifyContent:"center"}}>
                 <Preptable/></div> 
                 
                 <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",width:"auto"}}>

                <div style={{backgroundColor:"#5394c9",width:"50%",height:"auto"}}>
                   <Staffsel/>
                </div>
                <div style={{backgroundColor:"#97dbba",width:"50%",height:"auto"}}>
                  <Emailsender/>
                </div>

                </div>
    </div>
  )
}

export default Main;