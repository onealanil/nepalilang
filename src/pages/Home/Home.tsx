import Documentation from "../../components/Documentation";
import Bottom from "../../components/Header/Bottom";
import Heading from "../../components/Header/Heading";
import MobileHeader from "../../components/Header/MobileHeader";
import {Helmet} from "react-helmet";

function Home(): JSX.Element {
  return (
    //full container
    <div className="w-screen h-[100%]">
       <Helmet>
        <title>Dotnep | NepaliLang Compiler</title>
        <meta name="description" content="Welcome to NepaliLang, the powerful and user-friendly Nepali language compiler and interpreter. Start writing and running Nepali code today." />
        <link rel="canonical" href="https://dotnep.xyz" />
      </Helmet>
      {/* heading container */}
      <div className="md:h-[30rem] hidden md:block">
        <Heading />
      </div>
      {/* for mobile */}
      <div className=" md:hidden">
        <MobileHeader/>
      </div>
      {/* Documentation  */}
      <div>
        <Documentation />
      </div>
      <div className="w-[100%] flex items-center justify-center">
      <Bottom/>
      </div>
    </div>
  );
}

export default Home;