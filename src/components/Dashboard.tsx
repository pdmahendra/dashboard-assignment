import { Outlet } from "react-router-dom";
import Siidebar from "./Sidebar";
import { useState } from "react";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const yes = isOpen === true ? "block" : "hidden";
  
    const handleSidebar = () => {
      setIsOpen((prev) => !prev);
    };
  
  return (
    <div className="flex h-screen">
      <div className={`${yes} max-md:absolute max-md:w-[100%] md:flex`}>
        <Siidebar handleSidebar={handleSidebar}/>
      </div>

      <div className="flex-1 bg-gray-100 p-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 md:hidden"
            onClick={handleSidebar}

          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
