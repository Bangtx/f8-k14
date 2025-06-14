import './App.css'
import {useEffect, useState} from "react";

function App() {
  // ref
  let [count, setCount] = useState(0)

  const onClick = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
  }


  // vue - watch
  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={onClick}>click me</button>
    </>
  )
}

export default App
