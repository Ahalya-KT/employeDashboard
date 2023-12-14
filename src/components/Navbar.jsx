import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="flex justify-between items-center  bg-teal-50">
      <GiHamburgerMenu size={20} className="lg:hidden pl-2" />
      
      {/* logo*/}
      <div className="w-10 lg:w-20 bg-white ">
        <img src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-letter-p-logo-design-vector-png-png-image_6943111.png" />
      </div>
      <nav className="flex flex-row gap-2 pr-10">
        <div className="bg-white w-44 h-10 rounded-md shadow-sm flex items-center justify-center">
          <p className="font-semibold">XYZenterprizes</p>
        </div>
        <div className="bg-white w-10 flex justify-center items-center shadow-md rounded-md ">
          <IoIosArrowDown />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
