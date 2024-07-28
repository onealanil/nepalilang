import { Link } from "react-router-dom";
import Snippet from "../Documentation/Snippet";
import { FaGithub } from "react-icons/fa";

function Heading(): JSX.Element {
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
    <div className=" h-[100%] bg-bg flex w-[100%] py-[2rem] ">
      {/* logo */}
      <div className="w-[30%] flex">
        <img
          src="/assets/images/logo.png"
          alt="logo"
          className="w-[30rem] h-[26rem]"
        />
      </div>
      {/* main heading  */}
      <div className="w-[60%] flex flex-col gap-y-4">
        {/* menu bar  */}
        <div className="flex gap-x-10">
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
        <div className="flex w-[100%] gap-x-5">
          <div className="w-[40%] flex flex-col gap-y-3">
            <span className="leading-relaxed tracking-wide">
              NepaliLang (.NEP) is a toy programming language developed in
              TypeScript. This is the first version, and it will be updated
              regularly to incorporate new features and improvements.
            </span>
            <div className="my-2">
              <span className="py-2 px-2 rounded-md bg-[#1e1e1e] text-white font-opensans cursor-text">
                ` npm i nepalilang `
              </span>
            </div>
            <div className="mt-6">
              <Link to="/playground">
                <span className="py-4 px-8 bg-green text-white font-bold rounded-md font-opensans cursor-pointer">
                  Try Now
                </span>
              </Link>
            </div>
            <div className="mt-6 flex gap-x-3">
              <FaGithub size={20} />
              <a
                href="https://github.com/onealanil/nepalilang"
                className="font-opensans font-bold cursor-pointer"
              >
                Github
              </a>
            </div>
          </div>
          {/* images  */}
          <div className="w-[40%]">
            <Snippet code={code} />
          </div>
        </div>
      </div>
      {/* gap  */}
      <div className=""></div>
    </div>
  );
}

export default Heading;
