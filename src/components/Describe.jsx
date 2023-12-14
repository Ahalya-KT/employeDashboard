import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import image from "../images/Ellipse 12.png";

function Describe() {
  return (
    <div className="py-10 flex flex-col gap-8 px-1 ">
      {/* div 1 */}
      <div className="flex justify-center items-center gap-16 border-2 p-3 rounded-md">
        <div className="flex gap-6">
          <p className="border-2 p-1 rounded-lg text-xs">Due 05 Nov 2023</p>
          <p className="border-2 p-1 rounded-lg text-xs">Status Completed</p>
        </div>
        <div className="flex gap-5 ">
          {/* delete */}
          <div>
            <div className="px-2">
              <MdDelete />
            </div>
            <p className="text-xs">Delete</p>
          </div>

          {/*edit  */}
          <div>
            <div className="px-2">
              <FaEdit />
            </div>
            <p className="text-xs px-1">Edit</p>
          </div>

          {/* mark as */}
          <div>
            <div className="px-2">
              <FaBookmark />
            </div>
            <p className="text-xs">Mark as</p>
          </div>
        </div>
      </div>
      {/* box2 */}
      <div className="border-2 px-5 py-5">
        {/* div1 */}
        <div className="flex gap-2 border-b p-2">
          <div className="bg-green-500 w-5 h-5 rounded-full">
            <TiTick size={20} />
          </div>

          <p>Prepare a presentation for the upcoming meeting</p>
        </div>
        {/* div2 */}
        <div className=" border-b p-2">
          <p className="pt-5">Description</p>
          {/* <p className=" pt-5">
            The task is to create a well structured and engaging presentation
            for the upcoming meeting. This presentation serves as a medium to
            effectively communicate important infromation,proposal,finding,or
            updates,to the meeting attendees. The cintent of the presentation
            will vary depending on the meetings's purpose but generally includes
            text, visuals, and potentially multimedia elements to support the
            spoken delivery
          </p> */}
        </div>
        {/* div3 */}
        <div className="pt-5">
          <div className="flex gap-10  border-b p-2">
            <div>
              <p> Time Schedule</p>
              <p className="pt-5">
                <span className="text-red-600">Start</span> :01 Nov 2023
              </p>
              <p>
                <span className="text-green-500">End</span>:15 Nov 6:00
              </p>
            </div>
            <div>
              <p>Assigners</p>
              <div className="flex gap-6 pt-5 items-center justify-center text-xs">
                <div>
                  <img src={image} />
                  <p>John Luther</p>
                </div>
                <div>
                  <img src={image} />
                  <p>John Luther</p>
                </div>
                <div>
                  <img src={image} />
                  <p>John Luther</p>
                </div>
                <div>
                  <img src={image} />
                  <p>John Luther</p>
                </div>
                <div>
                  <img src={image} />
                  <p>John Luther</p>
                </div>
                <div>
                  <img src={image} />
                  <p>John luther</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* div 4 */}
        <div>
          <div className="pt-5">
            <p>SubTask</p>
            <div>
                <p className="pt-5">
                  1-Clearly define the scope of the surver including which topic and
                  areas it should cover 
                </p>
                <p>
                  2-Clearly define the scope of the surver including which topic and
                  areas it should cover
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Describe;
