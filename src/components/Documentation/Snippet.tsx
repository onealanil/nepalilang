import React from "react";
import { highlight } from 'prismjs';
import { nepaliLangSyntax } from "../../pages/playground/syntax/Syntax";
import CopyToClipboard from "../copy";
import "prismjs/themes/prism-tomorrow.css";

const Snippet = ({ code }: { code: string }) => {
  const highlightedCode = React.useMemo(() => {
    return highlight(code, nepaliLangSyntax, "nepaliLang");
  }, [code]);

  const lines = highlightedCode.split("\n");

  return (
    <div className="relative snippet-container group rounded-md overflow-hidden border border-gray-700">
      <style>{`
        .token.keyword { color: #569cd6; }
        .token.string { color: #ce9178; }
        .token.number { color: #b5cea8; }
        .line {
          display: flex;
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
            padding-left: 0;
            border-left: 1px solid #404040;
            margin-left: 0;
          }
      `}</style>
      <div className="bg-[#1e1e1e] text-[#d4d4d4] py-2 px-2 font-mono text-sm">
        <div className="flex items-center bg-[#252526] p-2 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green"></div>
          </div>
          <div className="ml-4 text-sm text-gray-400">NepaliLang</div>
        </div>
        <pre className="mt-2 language-nepaliLang">
          <code>
            {lines.map((line, index) => (
              <div key={index} className="line">
                <span className="line-number">{index + 1}</span>
                <span
                 
                  dangerouslySetInnerHTML={{ __html: line || '&nbsp;' }}
                />
              </div>
            ))}
          </code>
        </pre>
      </div>
      <div className="absolute top-2 right-2">
        <CopyToClipboard text={code} />
      </div>
    </div>
  );
};

export default React.memo(Snippet);
