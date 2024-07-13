import React from "react";
import Heading from "../../components/Header/Heading";

function Home(): JSX.Element {
    return (
         //full container
         <div className="w-screen h-[100%]">
             {/* heading container */}
             <div className="h-[25rem]">
                  <Heading/>
             </div>
         </div>
    );
}

export default Home;