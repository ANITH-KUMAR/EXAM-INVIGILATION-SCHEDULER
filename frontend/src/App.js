import React from 'react'
import Login from './Login'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Signup from './Signup'
import Main from './Main'
import Home from './Home'



function App() {  
  document.body.style.backgroundColor = "#eda258";
     return (   
     
     <BrowserRouter>     
             
          <Routes>            
             <Route path='/' element={<Login />}></Route> 
              <Route path='/signup' element={<Signup />}></Route>            
             <Route path='/home' element={<Home />}></Route>  
              <Route path='/main' element={<Main/>}></Route>    
          </Routes>    
     </BrowserRouter>  
     )}
export default App

