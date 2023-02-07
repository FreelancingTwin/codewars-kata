//We have an input bar. Return all the words typed, but flipped

import { useState, useEffect } from "react";

//here's a custom hook, interviewer guided me through
function useStringReverse() {
  const [input, setInput] = useState("");
  const [reversedInput, setReversedInput] = useState("");

  //if no useEffect, we'd run into an error. Something along the lines of heapstack full. It only fires when input changes.
  useEffect(() => {
    let arrayOfWords = input.split(" ");
    console.log("ARROFWORDS", arrayOfWords);

    //here I wanted an array from arrayOfWords, interviewer suggested to assing a variable to it, and map. Used forEach beforehand.
    let newArray = arrayOfWords.map(word => {
      // returns words in arrayOfWords, flipped
      const flippedWord = word
        .split("")
        .reverse()
        .join("");
      console.log("FlippedWORD", flippedWord);
      return flippedWord;
    });

    //this just converts our array into a string.
    const stringifiedArray = newArray.join(" ");
    console.log(stringifiedArray);

    //assigns the above sting as reversed string.
    setReversedInput(stringifiedArray);
  }, [input]);

  //learn custom hooks, apparently, the custom hook returns params?
  return { input, reversedInput, setInput };
}

function App() {
  //same as passing parameters to a function, it's same as useState, a bit of object destructuring.
  const { input, reversedInput, setInput } = useStringReverse();

  return (
    <div className="App">
      <form>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <p>{reversedInput}</p>
      </form>
    </div>
  );
}

export default App;
