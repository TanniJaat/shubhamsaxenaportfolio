import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";

import Image from "next/image"


export default function Home() {
  return (
   
      <main className="pt-10 h-[100vh] flex  lg:justify-start justify-center  bg-[#FAF1EF] gap-10">
       
       
          <div className="lg:w-[50%]">
          <LeftSide/>
          </div>
         <div className="hidden lg:flex lg:w-[50%]">
          <RightSide/>
         </div>


      </main>
  );
}
