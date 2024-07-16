import Documentation from "../../components/Documentation";
import Heading from "../../components/Header/Heading";
import CodeEditor from "../playground/codeEditor/CodeEditor";



function Home(): JSX.Element {

  return (
    //full container
    <div className="w-screen h-[100%]">
      {/* heading container */}
      <div className="h-[30rem]">
        <Heading />
      </div>
  {/* Documentation  */}
      <div>
       <Documentation/>   
        
      </div>
       <CodeEditor/>
      </div>
  );
}

export default Home;
