import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight } from 'prismjs';
import { nepaliLangSyntax } from '../syntax/Syntax';
import 'prismjs/themes/prism-tomorrow.css';

const CodeEditor = () => {
  const [code, setCode] = useState(
    `yedi (x > 5) {\n  nikaal("X is greater than 5");\n} haina bhane {\n  nikaal("X is not greater than 5");\n}`
  );

  const highlightWithLineNumbers = (input: string) => {
    const highlightedCode = highlight(input, nepaliLangSyntax, "nepaliLang");
    const lines = highlightedCode.split("\n");
    return lines.map((line, i) => (
      `<div class="editor-line">
        <span class="line-number">${i + 1}</span>
        <span class="line-content">${line || ' '}</span>
      </div>`
    )).join('');
  };

  return (
    <div className="w-full h-full bg-[#1e1e1e] text-white font-mono">
      <div className="flex items-center bg-[#252526] p-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green"></div>
        </div>
        <div className="ml-4 text-sm text-gray-400">NepaliLang Editor</div>
      </div>
      <div className="p-4 relative">
        <style>{`
          .editor-line {
            display: flex;
            line-height: 1.5;
          }
          .line-number {
            position: absolute;
            left: 0;
            width: 3em;
            text-align: right;
            padding-right: 1em;
            user-select: none;
            opacity: 0.5;
          }
          .line-content {
            padding-left: 3.5em;
            border-left: 1px solid #404040;
            margin-left: 1em;
          }
          .prism-editor__textarea:focus {
            outline: none;
          }
          .prism-editor__container {
            position: relative;
          }
          .prism-editor__textarea {
            position: absolute !important;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            resize: none;
            text-align: left !important;
            padding-left: 4.5em !important;
          }
          .prism-editor__editor {
            padding-left: 0 !important;
            margin-left: 0 !important;
          }
        `}</style>
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={highlightWithLineNumbers}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            backgroundColor: '#1e1e1e',
            color: '#d4d4d4',
          }}
          className="min-h-[300px] border border-gray-700 rounded overflow-auto"
          textareaClassName="prism-editor__textarea"
          preClassName="prism-editor__editor"
        />
      </div>
    </div>
  );
};

export default CodeEditor;