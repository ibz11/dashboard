import { Link, Outlet } from "@remix-run/react";
import React, { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-20 flex flex-col p-4 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="text-gray-800 self-end mb-4"
          onClick={toggleSidebar}
        >
          Close
        </button>
        <nav className="flex flex-col space-y-4">
          <Link to="#" className="text-gray-700 hover:text-black">Home</Link>
          <Link to="#" className="text-gray-700 hover:text-black">About</Link>
          <Link to="#" className="text-gray-700 hover:text-black">Services</Link>
          <Link to="#" className="text-gray-700 hover:text-black">Contact</Link>
        </nav>
      </div>

      {/* Open Sidebar Button */}
      <button
        className={`absolute top-4 left-4 z-30 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transform transition-transform duration-300 ${isOpen ? "translate-x-64" : "translate-x-0"}`}
        onClick={toggleSidebar} >
        Open Sidebar
      </button>

      {/* Main Content */}
     
    </div>
  );
}
