import React from "react";

function Sidebarbtn({ icons, title }) {
  return (
    <div className="flex gap-2 px-5 items-center border-r border-t border-b h-16 rounded-md hover:bg-sky-300 hover:ring-sky-300 ">
      <p>{icons}</p>
      <p>{title}</p>
    </div>
  );
}

export default Sidebarbtn;
