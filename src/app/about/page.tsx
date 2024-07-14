import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="bg-[#FAF1EF] overflow-x-hidden  h-[100vh] relative z-0">
      <Navbar text={" > About"} />

      <div className="flex lg:flex-row-reverse flex-col lg:pt-[60px] gap-4">
        <div className="mx-auto h-[350px] w-[350px] lg:h-[600px] lg:w-[600px] overflow-hidden object-cover ">
          <img src={"/user.jpg"} alt={""} />
        </div>

        <div className="w-full flex flex-col justify-center ">
          <p className="p-2 mx-auto max-w-screen-sm leading-8 text-lg text-slate-700 opacity-85">
            A passionate photographer with a love for capturing the world
            through my lens. My journey began young, and over the years, I've
            developed a unique style that blends creativity and precision.
            Besides photography, I'm a foodie who believes in the magic of food
            bringing people together. This passion shines through in my food
            photography, where I aim to capture the beauty of culinary art.
            Welcome to my portfolio—each photo tells a story. Enjoy exploring my
            work!

            <div className="border-2 border-slate-600 mt-2 mb-2"/>
            <div className="mx-auto p-3  ">
              <h1>Selected Clients</h1>
              <ul className=" list-disc flex gap-8 flex-wrap">
                <li>myntra</li>
                <li>pitbar</li>
                <li>rash</li>
                <li>trends</li> 
              </ul>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
