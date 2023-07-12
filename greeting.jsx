import { useState } from 'react'

import './App.css'

function App() {
  // ["hello", "world", ...rest]
  const [greeting, setGreeting] = useState("Hello World, how are you?")
  function revStr(greeting){
    const splitGreeting = greeting.split(' ')
                                  .map(word => word.split('').reverse().join(''))
                                  .join(' ')
    setGreeting(splitGreeting);
  }
  return (
    <>
      <input type="text" value={greeting} onChange={(e)=> setGreeting(e.target.value)}/>
      <button onClick={()=>{revStr(greeting)}}>Reverse string</button>
    </>
  )
}

export default App
