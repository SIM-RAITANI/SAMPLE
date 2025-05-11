import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [message, setMessage] = useState(0);
  useEffect(async ()=>{
    const res=await axios.get("http://localhost:3000",{

      withCredentials: true,
    });
    console.log(res);
    setMessage(res.data);
    
  })

  return (
    <>
      {message}
    </>
  )
}

export default App
