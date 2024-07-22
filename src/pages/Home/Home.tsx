import Documentation from "../../components/Documentation";
import Heading from "../../components/Header/Heading";

function Home(): JSX.Element {
  return (
    //full container
    <div className="w-screen h-[100%]">
      {/* heading container */}
      <div className="md:h-[30rem]">
        <Heading />
      </div>
      {/* Documentation  */}
      <div>
        <Documentation />
      </div>
    </div>
  );
}

export default Home;
