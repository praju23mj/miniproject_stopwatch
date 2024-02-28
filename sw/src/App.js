import { useState ,useEffect } from 'react'

import './App.css'

function App() {
  const [sec, setSec] = useState(0);
  const [start,setStart]=useState(false);
  const startStop=()=>{
      setStart(!start);
  }
  
  useEffect(()=>{
    let timer;
    if(start){
    timer=setInterval(()=>{
      setSec(p=>p+1); 
    },1000)
    }else{
      clearInterval(timer);
    }
    return ()=>clearInterval(timer);
  },[start])

  const resett=()=>{
    setStart(false);
    setSec(0);
  }

  const formatTime=(time)=>{
      const minutes=Math.floor(time/60);
      const seconds=Math.floor(time%60);

      return `${minutes}:${seconds<10?'0':''}${seconds}`;
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(sec)}</p>
      <br/>
      <button onClick={startStop}>{start ? "Stop" : "Start"}</button> 
      <button onClick={resett}>Reset</button>  
    </>
  )
}

export default App