import { Outlet } from "react-router-dom";



import { useState } from "react";
import Sidebar from "../../component/sidebar";
import Topbar from "../../component/topbar";

const DashboardLayout = () => {
  const [show, setShow] = useState(false);
  
  return (
    <div className="flex  max-h-screen ">
      
      {/* Sidebar */}
      <Sidebar show={show} setShow={setShow} />

      {/* Main Section */}
      <div className="flex-1 bg-[#FAFAFB]   flex flex-col">

        {/* Navbar */}
        <Topbar show={show} setShow={setShow} />

        {/* Page Content */}
        <main className="p-4 scrollbar-hide overflow-y-auto flex-1 overflow-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;
