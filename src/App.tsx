import React, { useState } from 'react';
import './App.css';
import { compile } from "nepali-compiler";

function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function convertToNepali() {
    console.log("Input code:", code);
    setError(""); // Clear any previous errors
    setOutput(""); // Clear previous output

    try {
      const result = compile(code);
      console.log("Compilation result:", result);

      if (result === undefined) {
        setError("Compilation result is undefined. Check the compiler implementation.");
        return;
      }

      if (typeof result === 'object' && result !== null) {
        if ('output' in result && 'result' in result) {
          // This is the expected structure from your compile function
          setOutput(result.output);
          console.log("Evaluation result:", result.result);
        } else {
          setOutput(JSON.stringify(result, null, 2));
        }
      } else {
        setOutput(String(result));
      }
    } catch (error: any) {
      console.error("Compilation error:", error);
      setError(error.message || "An unknown error occurred");
    }
  }

  return (
    <div className="App">
      <h1>Nepali Compiler</h1>
      <textarea 
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code here..."
        rows={10}
        cols={50}
      />
      <br />
      <button onClick={convertToNepali}>Convert to Nepali</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <h2>Output:</h2>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default App;