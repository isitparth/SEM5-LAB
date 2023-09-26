import './App.css';
import { useState } from 'react';

function App() {
  const [first, setFirst] = useState("hello");
  const [last, setLast] = useState("world");

  return (
    <div className="App">
      <input type='text' value={first} onChange={(e)=>setFirst(e.target.value)}></input>
      <br/>
      <input type='text' value={last} onChange={(e)=>setLast(e.target.value)}></input>
      <br/> <br/>
      <p>{first}  {last}</p>

    </div>
  );
}

export default App;
