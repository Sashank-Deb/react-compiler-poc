import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//block synchronously for 2 seconds
function blockSync(ms){
  const start = Date.now();
  let now = start;
  while (now-start < ms){
    now = Date.now();
  }
}

function SlowComponent(){
  blockSync(2000);
  return <div>This is a slow component</div>;
}

const MemoSlow = React.memo(SlowComponent);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {`Count is ${count}`}
        </button>
        <br/><br/><br/>
        <SlowComponent/>
        {/* <MemoSlow/> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
