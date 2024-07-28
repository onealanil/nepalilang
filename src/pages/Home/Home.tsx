import Documentation from "../../components/Documentation";
import Heading from "../../components/Header/Heading";
import MobileHeader from "../../components/Header/MobileHeader";

function Home(): JSX.Element {
  return (
    //full container
    <div className="w-screen h-[100%]">
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
    </div>
  );
}

export default Home;