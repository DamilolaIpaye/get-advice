
import './App.css';
import Message from './components/Message';
import { useEffect, useState } from "react";

function App() {  
  const [advice, setAdvice] = useState("");
const [count, setCount] = useState(0);

async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  setAdvice(data.slip.advice);
  setCount((c) => c + 1);
}

useEffect(function () {
  getAdvice();
}, []);
  return (
    <div>
     <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
    </div>
  );
}

export default App;
