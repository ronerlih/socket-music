import React, { useState, useEffect } from 'react';
import "./utils/API";
import logo from './logo.svg';
import './App.css';
import API from './utils/API';
import Dot from "./components/Dot"
import audio from "./utils/sound";

export default function App()  {
  const [dot, setDot] = useState({position:{}, color:{}});
  const [mousePosition, setMousePosition] = useState({x:200,y:200});

  const handleClick = e =>
    {
      setMousePosition({x: e.clientX, y: e.clientY});
    }
  
  useEffect(() => {
    API.socket.on('canvas', data => {
      console.log(data);
      setDot(data);
      audio.play(data.position.y)
    });
    API.send(mousePosition, confirmation => {console.log(confirmation);audio.play(confirmation.position.y);setDot(confirmation)});

    // CLEAN UP THE EFFECT (disconnect)
    // return () => API.disconnect();
  }, [mousePosition])

  return (
    <>
      <div className="bg-dark">
        <img src={logo} className="App-logo" style={{height:40}} alt="logo" />
      </div>
      <div 
        style={{position:"relative", width:"100%", minHeight: "calc(100vh - 40px)" }} 
        onClick={handleClick}
        >
        <Dot dot={dot} />
      </div>
    </>
  );
}

