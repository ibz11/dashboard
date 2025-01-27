import { Link, Outlet } from "@remix-run/react";
import { useState } from "react";

import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

export default function Layout(){
const links=[
   {id:"1",name:"Create Listing",link:"/dashboard/create-listing"},
   {id:"2",name:"View Listings",link:"/dashboard/view-all-listings"},
   {id:"3",name:"Sign Out",link:"/signout"}
]
const [isOpen, setIsOpen] = useState(false);
    
const toggleSidebar = () => {
    setIsOpen(!isOpen);
      };
    return(
        <>
    <div className="relative h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-20 flex flex-col p-4 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="text-gray-800 self-end mb-4"
          onClick={toggleSidebar}
        >
            <X  className="text-black h-10"/>
        </button>
        <h1 className="text-black text-2xl my-2 font-bold">Abmara Dashboard</h1>
        <p className="my-2 font-semibold ">Welcome User</p>
        <nav className="flex flex-col space-y-4">
         {links.map(link =>(
 <Link key={link.id} to={link.link} className="text-gray-700 hover:text-black">{link.name}</Link>
         ))}
         
</nav>
</div>

      {/* Open Sidebar Button */}
      <button
        className={`absolute top-4 left-4 z-30  text-white px-4 py-2 rounded-lg  transform transition-transform duration-300 ${isOpen ? "translate-x-64" : "translate-x-0"}`}
        onClick={toggleSidebar} >
       <Menu className="h-10 text-black"/>
      </button>

      {/* Main Content */}
      <div className={` flex-1 flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? "ml-64" : "ml-0"}`}>
      <Outlet/>
      </div>
   
    </div>



                
        </>

    )
    
}