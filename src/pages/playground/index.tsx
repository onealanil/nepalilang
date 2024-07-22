import React, { useState } from "react";
import Heading from "../../components/Header/Heading";
import CodeEditor from "./codeEditor/CodeEditor";
import { compile } from "nepali-compiler";

const Playground = () => {
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [code, setCode] = useState(
    `rakh x = 2; \nyedi (x > 5) {\n  nikaal("X is greater than 5");\n} haina bhane {\n  nikaal("X is not greater than 5");\n}`
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

    console.log(code);

    try {
      const result = compile(code);
      console.log("Compilation result:", result);

      if (result === undefined) {
        setError(
          "Compilation result is undefined. Check the compiler implementation."
        );
        return;
      }

      if (typeof result === "object" && result !== null) {
        if ("output" in result && "result" in result) {
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
  };

  const handleClear = () => {
    // Implement the logic to clear the code editor
    setOutput("");
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center h-full">
      <div>
        <Heading />
      </div>
      <div className="flex w-4/5 my-5 pb-60">
        <div className="w-4/5">
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
    </div>
  );
};

export default Playground;
