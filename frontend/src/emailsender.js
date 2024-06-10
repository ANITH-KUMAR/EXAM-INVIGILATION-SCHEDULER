import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Emailsender = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7twgiiw', 'template_uf73fnt', form.current, {
        publicKey: 'ligPREVYnF4rzUAzl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <label>Name</label>
      <input style={{margin:"20px",width:"20%"}} type="text" name="from_name" placeholder='Enter name' />
      <br></br>
      <label>Email</label>
      
      <input style={{margin:"20px",width:"20%"}} type="email" name="from_email" placeholder='Enter receiver email' />
       <br></br>
      <p>Text:</p>
      <textarea style={{marginLeft:"20px",width:"50%",height:"100px"}} name="message" placeholder='enter message' />
      <br></br>
      <div style={{textAlign:"center",alignItems:"center",justifyContent:"center",display:"flex"}}>
      <input type="submit" value="Send" style={{width:"500px",height:"50px",backgroundColor:"#e3a1ba"}} />
      </div> 
    </form>
  );
};