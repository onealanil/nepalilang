import React, { useState } from "react";
import Heading from "../../components/Header/Heading";
import CodeEditor from "./codeEditor/CodeEditor";
import { resetCompilerState, compile } from "nepali-compiler";
import MobileHeader from "../../components/Header/MobileHeader";
import Bottom from "../../components/Header/Bottom";

const Playground = () => {
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [code, setCode] = useState(
    `rakh x = 2; \nyedi (x > 5) {\n  nikaal("X chai 5 bhanda thulo chha!");\n} haina bhane {\n  nikaal("X chai 5 bhanda syano chha!");\n}`
  );

  const syntaxDefinition = [
    { name: "let/const/var", nep: "rakh" },
    { name: "print", nep: "nikaal" },
    { name: "if", nep: "yedi" },
    { name: "else if", nep: "navaye" },
    { name: "else", nep: "haina bhane" },
    { name: "while", nep: "jaba samma" },
    { name: "break", nep: "bhayo" },
    { name: "continue", nep: "jaari rakh" },
    { name: "function with return", nep: "kaam ra firta" },
    { name: "function without return", nep: "kaam" },
    { name: "return", nep: "firta" },
    { name: "true", nep: "sahi" },
    { name: "false", nep: "galat" },
  ];

  const handleRun = () => {
    setError(""); // Clear any previous errors
    setOutput(""); // Clear previous output

    try {
      resetCompilerState(); // Reset compiler state before compiling
      const { results, outputs } = compile(code);

      let fullOutput = "";

      // Add all captured outputs
      if (outputs.length > 0) {
        fullOutput += outputs.join("\n") + "\n";
      }

      // Add the final result if it's not null and not already included in the outputs
      // if (results && results.type !== "null" && !outputs.includes(String(results.value))) {
      //   fullOutput += "Final Result: " + JSON.stringify(results.value, null, 2);
      // }

      if (fullOutput.trim() === "") {
        fullOutput = "No output generated.";
      }

      setOutput(fullOutput);
    } catch (error: any) {
      console.error("Compilation error:", error);
      setError(error.message || "An unknown error occurred");
    }
  };


  const handleClear = () => {
    // Implement the logic to clear the code editor
    setOutput("");
  };

  return (
    <div className="w-screen md:flex md:flex-col items-center justify-center h-[100%]">
      <div className="hidden md:block">
        <Heading />
      </div>
      <div className="md:hidden block">
        <MobileHeader />
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row md:w-4/5 my-5 pb-60">
        <div className="w-[90%] md:w-4/5">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">Playground</h2>
            <div>
              <span
                onClick={handleRun}
                className="mr-2 px-4 py-2 bg-green text-white rounded cursor-pointer hover:bg-green transition-colors"
              >
                Run
              </span>
              <span
                onClick={handleClear}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded cursor-pointer hover:bg-gray-400 transition-colors"
              >
                Clear
              </span>
            </div>
          </div>
          <CodeEditor code={code} setCode={setCode} />
          <div className="mt-4 p-4 bg-gray-100 rounded">
            {error && <div style={{ color: "red" }}>{error}</div>}
            <h3 className="font-bold mb-2">Output:</h3>
            <pre>{output}</pre>
          </div>
        </div>
        <div className="ml-4">
          <table className="table-auto">
            <tbody>
              {syntaxDefinition.map((syntax) => (
                <tr key={syntax.name}>
                  <td className="border px-4 py-2 font-bold text-green">
                    {syntax.name}
                  </td>
                  <td className="border px-4 py-2 font-bold text-black">
                    {syntax.nep}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* bottom  */}
      <Bottom />
    </div>
  );
};

export default Playground;
