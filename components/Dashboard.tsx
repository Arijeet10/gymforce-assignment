import AveragePriceCard from "./Cards/AveragePriceCard";
import MonthlyEarningCard from "./Cards/MonthlyEarningCard";
import OrdersCard from "./Cards/OrdersCard";
import ProfileCard from "./Cards/ProfileCard";
import RevenueCard from "./Cards/RevenueCard";
import BarChart from "./Charts/BarChart";
import TableChart from "./Charts/TableChart";
import { Card } from "./ui/card";

const DefaultDashboard = () => {
  return (
    <>
      <div className="p-2 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium">Dashboard</div>
        </div>
        {/* /Header */}

        <div className="grid sm:grid-cols-12 gap-4">
          <div className="sm:col-span-4 flex flex-col gap-4">
            <div>
              <ProfileCard />
            </div>
            <div>
              <MonthlyEarningCard />
            </div>
          </div>
          <div className="sm:col-span-8 grid sm:grid-rows-12 gap-4">
            <div className="sm:row-span-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1 w-full h-full">
                <OrdersCard />
              </div>
              <div className="flex-1 w-full h-full">
                <RevenueCard />
              </div>
              <div className="flex-1 w-full h-full">
                <AveragePriceCard />
              </div>
            </div>
            <div className="sm:row-span-8">
              <Card className="w-full h-full">
                <BarChart />
              </Card>
            </div>
          </div>
        </div>
        <div className="max-h-[60vh] sm:max-h-[40vh] overflow-scroll">
          <TableChart />
        </div>
      </div>
    </>
  );
};

export default DefaultDashboard;
