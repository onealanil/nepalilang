import React from "react";
import Prism from "prismjs";
import { nepaliLangSyntax } from "../../pages/playground/syntax/Syntax";
import CopyToClipboard from "../copy";
import "prismjs/themes/prism-tomorrow.css"; 

Prism.languages.nepaliLang = nepaliLangSyntax;

const Snippet = ({ code }: { code: string }) => {
  // Use Prism.highlight instead of highlight
  const highlightedCode = Prism.highlight(code, Prism.languages.nepaliLang, "nepaliLang");
  const lines = highlightedCode.split("\n");

  return (
    <div className="relative snippet-container group rounded-md overflow-hidden border border-gray-700">
      <div className="bg-[#1e1e1e] text-[#d4d4d4] py-2 px-2 font-mono text-sm">
        <div className="flex items-center bg-[#252526] p-2 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-sm text-gray-400">NepaliLang</div>
        </div>
        <div className="mt-2">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              <span className="text-gray-500 w-8 text-right pr-2 select-none">
                {index + 1}
              </span>
              <span
                className="flex-1"
                dangerouslySetInnerHTML={{
                  __html: line.replace(/\s/g, '&nbsp;') || '&nbsp;'
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-2 right-2">
        <CopyToClipboard text={code} />
      </div>
    </div>
  );
};

export default React.memo(Snippet);

// Additional CSS to ensure proper highlighting
const additionalStyles = `
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #8292a2;
}
.token.punctuation {
  color: #f8f8f2;
}
.token.namespace {
  opacity: .7;
}
.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: #f92672;
}
.token.boolean,
.token.number {
  color: #ae81ff;
}
.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #a6e22e;
}
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #f8f8f2;
}
.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
  color: #e6db74;
}
.token.keyword {
  color: #66d9ef;
}
`;

// You can inject this style into your document or include it in your CSS file
const styleElement = document.createElement('style');
styleElement.textContent = additionalStyles;
document.head.appendChild(styleElement);