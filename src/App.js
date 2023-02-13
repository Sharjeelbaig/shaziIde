import React, { useState } from "react";
import './App.css'
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import Heading from "./components/Heading/Heading";
import HireMe from "./components/HireMe/HireMe";
import { compileJsSafely }  from "shazi-js-compiler";


const Ide = () => {
  const [input, setInput] = useState("");
  const [outputs, setOutputs] = useState([]);

  

  return (
    <div>
      <Heading />
      <div className="ide-container">
        <CodeMirror
        className="ide-input"
        value={input}
        theme={'dark'}
        extensions={[javascript({ jsx: true })]}
        onChange={(text)=>{setInput(text)}}
    />
        <div className="ide-output" id="output">
          {outputs.map((output, index) => (
            <div key={index}>{output}</div>
          ))}
        </div>
      </div>
      <button onClick={() => {compileJsSafely(input,setOutputs)}} className="ide-evaluate-button">
        Evaluate
      </button>
      <HireMe />
    </div>
  );
};

export default Ide;
