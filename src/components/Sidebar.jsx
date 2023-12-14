import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Sidebarbtn from "./Sidebarbtn";
import { MdDashboard } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { MdOutlineLocalFlorist } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";

function Sidebar() {
  return (
    <div className="bg-white shadow-md w-56 h-full  py-1 ">
      {/* profile */}
      <div className=" flex items-center flex-col w-56 h-44 px-5 py-5 shadow-md">
        <div className="pl-9">
          <img
            className="rounded-full w-16 h-16"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <div className="flex">
            <p className="font-semibold inline">Ram mohn</p>
            <IoIosArrowForward size={25} className="pt-2 text-teal-300" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p>ramohan@gmail.com</p>
        </div>
      </div>

      {/* profile items */}

      <div className="flex flex-col gap-3 py-10 w-52 rounded-md font-semibold">
        <Sidebarbtn
          title="Dashboard"
          icons={<MdDashboard size={30} className="text-cyan-500 pt-2" />}
        />

        <Sidebarbtn
          title="Perks"
          icons={<PiPottedPlantFill size={30} className="text-cyan-500 pt-2" />}
        />

        <Sidebarbtn
          title="Addons"
          icons={
            <MdOutlineLocalFlorist size={30} className="text-cyan-500 pt-2" />
          }
        />

        <Sidebarbtn
          title="FAQ"
          icons={<FaQuestionCircle size={30} className="text-cyan-500 pt-2" />}
        />

        <Sidebarbtn
          title="Support"
          icons={<MdContactSupport size={30} className="text-cyan-500 pt-2" />}
        />
      </div>
    </div>
  );
}

export default Sidebar;
