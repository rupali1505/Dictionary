import {  useState } from "react";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [defination, setDefination] = useState("");

  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleClick = () => {
    let newWord = word.toLowerCase();
    let result = dictionary.find((item)=>item.word.toLowerCase()===newWord);
    if(result){
        setDefination(result.meaning)
    }else{
        setDefination("Word not found in the dictionary.");
    }
  };
  

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      <h3>Defination:</h3>
      <p>{defination}</p>
    </div>
  );
}
