import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Describe from "../components/Describe";
import { FaChevronLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
  
  // const HamburgerMenu=()=>{
  //   const[sidebarOpen,setsidebarOpen]=useState(false)
  // }

  return (
    <div>
      {/* navbar */}
      <Navbar />

      <div className="flex w-full">
        {/* sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <div className="py-3 px-4 w-full ">
          {/* task flow */}
          <div className=" flex justify-between items-center px-4  py-10 bg-teal-50 h-5 rounded-lg">
            <div className="flex gap-2">
              <div className="text-teal-400 py-1">
                <FaChevronLeft size={20} />
              </div>
              <p className="font-semibold">Task Flow</p>
            </div>
            <div className="flex gap-2 pr-6 border border-text-teal-600 p-2 rounded-lg">
              <p className="font-semibold text-purple-500">Schedule Task</p>
              <FaArrowRightLong size={20} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row ">
            {/* table */}
            <div className="w-full">
              <Table />
            </div>
            {/* describe */}
            <div>
              <Describe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
