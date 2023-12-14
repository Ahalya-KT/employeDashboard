import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

function Table() {
  return (
    <div className="px-20 py-7 flex flex-col gap-5">
      <div className="flex  gap-10  p-2 border border-zinc-400 rounded-lg ">
        <div className="flex gap-2 ">
          <p>Task Flow</p>
          <p>Task Flow</p>
          <FaAngleRight size={20} />
        </div>
        <div className="flex">
          <p>All</p>
          <FaCaretDown size={25} />
        </div>
      </div>
      {/* div 2 */}
      <div className="flex  gap-8 p-2  border border-zinc-400 rounded-lg ">
        <div className="flex gap-2 ">
          <div className="bg-yellow-500 w-5 h-5 rounded-full">
            <TiTick size={20} />
          </div>

          <div>
            <p>employee survey</p>
            <p className="text-xs">05 Nov 2023 9:30</p>
          </div>
          <FaAngleRight size={20} />
        </div>
        <div className="flex">
          <p>All</p>
          <FaCaretDown size={25} />
        </div>
      </div>
      {/* div3 */}

      <div className="flex  gap-8 p-2  border border-zinc-400 rounded-lg  ">
        <div className="flex gap-2 ">
          <div className="bg-green-500 w-5 h-5 rounded-full">
            <TiTick size={20} />
          </div>

          <div>
            <p>employee survey</p>
            <p className="text-xs">05 Nov 2023 9:30</p>
          </div>
          <FaAngleRight size={20} />
        </div>
        <div className="flex">
          <p>All</p>
          <FaCaretDown size={25} />
        </div>
      </div>
      {/* div4 */}
      <div className="flex  gap-8 p-2  border border-zinc-400 rounded-lg  ">
        <div className="flex gap-2 ">
          <div className="bg-yellow-300 w-5 h-5 rounded-full">
            <TiTick size={20} />
          </div>

          <div>
            <p>employee survey</p>
            <p className="text-xs">05 Nov 2023 9:30</p>
          </div>
          <FaAngleRight size={20} />
        </div>
        <div className="flex">
          <p>All</p>
          <FaCaretDown size={25} />
        </div>
      </div>
      {/* div5 */}
      <div className="flex  gap-8 p-2  border border-zinc-400 rounded-lg ">
        <div className="flex gap-2 ">
          <div className="bg-red-500 w-5 h-5 rounded-full">
            <TiTick size={20} />
          </div>

          <div>
            <p>employee survey</p>
            <p className="text-xs">05 Nov 2023 9:30</p>
          </div>
          <FaAngleRight size={20} />
        </div>
        <div className="flex">
          <p>All</p>
          <FaCaretDown size={25} />
        </div>
      </div>

      {/* div6 */}
      <div className="flex  gap-8 p-2  border border-zinc-400 rounded-lg ">
        <div className="flex gap-2 ">
          <div className="bg-yellow-500 w-5 h-5 rounded-full">
            <TiTick size={20} />
          </div>

          <div>
            <p>employee survey</p>
            <p className="text-xs">05 Nov 2023 9:30</p>
          </div>
          <FaAngleRight size={20} />
        </div>
        <div className="flex">
          <p>All</p>
          <FaCaretDown size={25} />
        </div>
      </div>
      {/* div7 */}
      <div className="flex  gap-8 p-2  border border-zinc-400 rounded-lg ">
        <div className="flex gap-2 ">
          <div className="bg-yellow-500 w-5 h-5 rounded-full">
            <TiTick size={20} />
          </div>

          <div>
            <p>employee survey</p>
            <p className="text-xs">05 Nov 2023 9:30</p>
          </div>
          <FaAngleRight size={20} />
        </div>
        <div className="flex">
          <p>All</p>
          <FaCaretDown size={25} />
        </div>
      </div>
    </div>
  );
}

export default Table;
