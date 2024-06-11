import {
    Card,
    CardContent,
  } from "@/components/ui/card";
  import { WalletCards } from "lucide-react";
  
  const RevenueCard = () => {
    return (
      <>
        <Card className="w-full h-full">
          <CardContent className="w-full h-full">
          <div className="w-full h-full flex items-center justify-between">
            <div className="w-full h-full flex flex-col justify-center gap-4">
              <div>Revenue</div>
              <div className="text-lg">$35,723</div>
            </div>
            <div className="">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-[#567de9] to-[#1e57f5]">
                <WalletCards className="w-10 h-10 text-[#FFFFFF]" />
              </div>
            </div>
          </div>
          </CardContent>
        </Card>
      </>
    );
  };
  
  export default RevenueCard;
  