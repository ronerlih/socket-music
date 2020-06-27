import React, { useState, useEffect } from 'react';
import "./utils/API";
import logo from './logo.svg';
import './App.css';
import API from './utils/API';
import Dot from "./components/Dot"

export default function App()  {
  const [dot, setDot] = useState([]);
  const [mousePosition, setMousePosition] = useState({x:0,y:0});

  const handleClick = e =>
    {
      setMousePosition();
      API.send({x: e.clientX, y: e.clientY}, confirmation => {console.log(confirmation)});
    }
    API.socket.on('canvas', data => {console.log(data);setDot(data)});
  
  
  useEffect(() => {
 

    // CLEAN UP THE EFFECT (disconnect)
    // return () => API.disconnect();
  }, [])

  return (
    <>
      <div className="bg-dark">
        <img src={logo} className="App-logo" style={{height:40}} alt="logo" />
      </div>
      <div 
        style={{position:"relative", width:"100%", minHeight: "calc(100vh - 40px)" }} 
        onClick={handleClick}
        >
        <Dot position={dot} />
      </div>
    </>
  );
}

