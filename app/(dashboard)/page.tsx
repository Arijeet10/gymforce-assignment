"use client";

import DefaultDashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import {
  ResizablePanelGroup,
  ResizableHandle,
  ResizablePanel,
} from "@/components/ui/resizable";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    console.log(sidebar);
  }, [sidebar]);

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-full min-h-[100vh] w-full h-full rounded-lg border"
      >
        <ResizablePanel
          defaultSize={20}
          className={`${sidebar ? "hidden" : "hidden sm:block"} `}
        >
          <Sidebar />
        </ResizablePanel>
        <ResizablePanel defaultSize={80} className=" bg-[#FFFFFF]">
          <div className="p-2 flex items-center ">
            <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          </div>
          <div className="bg-[#f8f8fb] h-full">
            <DefaultDashboard />
          </div>

        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default DashboardPage;
