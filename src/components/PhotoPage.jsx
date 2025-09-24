
import React from "react";
import OrangeBtn from "./OrangeBtn";
import ProfileCard from "./ProfileCard";

function PhotoPage() {
  return (
    <>
      {/* Button */}
 {/* <OrangeBtn/> */}



      {/* Cards */}
      <div
        id="scrollpage"
        className="w-full flex flex-col items-center gap-6 px-4 mt-[4%]"
      >
        {/* Row 1 (1 person) */}
        <div className="flex justify-center w-[15]">
          <ProfileCard
            profile="vite.svg"
            name="Dr. Ashish Malik"
            position="Director"
          />
        </div>

        <div className="bg-slate-700 w-[40%] h-[2px]"> </div>

        {/* Row 2 (1 person) */}
        <div className="flex justify-center w-[15]">
          <ProfileCard
            profile="vite.svg"
            name="Dr. Ashish Malik"
            position="Director"
          />
        </div>

        <div className="bg-slate-700 w-[40%] h-[2px]"> </div>

        {/* Row 3 (3 people) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          <ProfileCard
            profile="vite.svg"
            name="Coordinator"
            position="Member"
          />
          <ProfileCard
            profile="vite.svg"
            name="Person 4"
            position="Member"
          />
          <ProfileCard
            profile="vite.svg"
            name="Person 5"
            position="Member"
          />
        </div>

         <OrangeBtn/>
         <div className="bg-slate-700 w-[40%] h-[2px]"> </div>

        {/* Row 4 (3 people) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          <ProfileCard
            profile="AshrafAli2.jpeg"
            name="Ashraf Ali"
            position="TechLead"
          />
          <ProfileCard
            profile="Kanika.jpeg"
            name="Kanika Tripathi"
            position="Member"
          />
          <ProfileCard
            profile="Manas2.jpeg"
            name="Manas Sahu"
            position="Member"
          />
        </div>
      </div>
    </>
  );
}

export default PhotoPage;