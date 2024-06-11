import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

const NotFound = () => {
  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={20}>
          <Sidebar />
        </ResizablePanel>
        <ResizablePanel defaultSize={80}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={10}>
              <Navbar />
            </ResizablePanel>
            <ResizablePanel defaultSize={90}>
              <div className="min-h-screen  flex items-center justify-center text-3xl font-semibold">
                Error 404 Not Found
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default NotFound;
