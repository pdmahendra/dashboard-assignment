import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-end items-center gap-x-6 font-bold pb-10">
        <p className="text-[#1a2d46] text-base">Friday, December 6, 2024</p>
        <p className="text-[#1a2d46] text-base">7:18:16 AM</p>

        <div className="border-2 border-[#fe6100]">
          <button className="px-3 text-[#fe6100]">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
