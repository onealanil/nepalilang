import { Link } from "react-router-dom";
import Snippet from "../Documentation/Snippet";
import { FaGithub } from "react-icons/fa";

function MobileHeader(): JSX.Element {
  const code = ` 
     nikaal "Hello World";
     rakh a = 3;
     
     yedi (a < 3){
       nikaal "a chai 3 bhanda syano chha";
     } navaye (a == 3){
       nikaal "a chai 3 chha"; 
     } haina bhane {
       nikaal "a chai 3 bhanda thulo chha"; 
     }
    `;

  return (
    <div className="bg-bg flex flex-col md:flex-row w-full p-4 md:p-8">
      {/* logo */}
      <div className="w-full flex justify-center md:justify-start mb-6 mt-[2rem]">
        <img
          src="/assets/images/mobile.png"
          alt="logo"
          className="w-[8rem] h-auto object-contain"
        />
      </div>
      {/* main heading  */}
      <div className="w-full md:w-[70%] flex flex-col gap-y-6">
        {/* menu bar  */}
        <div className="flex justify-center md:justify-start gap-x-6 md:gap-x-10">
          <Link to="/">
            <span className="font-opensans font-bold cursor-pointer">Docs</span>
          </Link>
          <Link to="/playground">
            <span className="font-opensans font-bold cursor-pointer">
              Playground
            </span>
          </Link>
        </div>
        {/* main text  */}
        <div className="flex flex-col md:flex-row w-full gap-6 md:gap-x-5">
          <div className="w-full md:w-[50%] flex flex-col gap-y-4">
            <span className="leading-relaxed tracking-wide text-center md:text-left">
              NepaliLang (.NEP) is a toy programming language developed in
              TypeScript. This is the first version, and it will be updated
              regularly to incorporate new features and improvements.
            </span>
            <div className="my-2 flex justify-center md:justify-start">
              <span className="py-2 px-2 rounded-md bg-[#1e1e1e] text-white font-opensans cursor-text break-all">
                npm i nepalilang
              </span>
            </div>
            <div className="mt-2 flex justify-center md:justify-start">
              <Link to="/playground">
                <span className="py-4 px-8 bg-green text-white font-bold rounded-md font-opensans cursor-pointer">
                  Try Now
                </span>
              </Link>
            </div>
            <div className="mt-2 flex justify-center gap-x-3">
              <FaGithub size={20} />
              <a
                href="https://github.com/onealanil/nepalilang"
                className="font-opensans font-bold cursor-pointer"
              >
                Github
              </a>
            </div>
          </div>
          {/* code snippet  */}
          <div className="w-full md:w-[50%]">
            <Snippet code={code} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
