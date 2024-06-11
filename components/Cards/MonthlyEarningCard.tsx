import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import DonutChart from "../Charts/DonutChart";

const MonthlyEarningCard = () => {
  return (
    <>
      <Card>
        <div className="p-4">
          <div className="text-lg font-semibold mb-2">Monthly Earning</div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-1">This month</div>
              <div>
                <div className="text-2xl font-bold mb-1">$35,252</div>
                <div className="text-sm text-gray-500">
                  <span className="text-green-500">12%</span> from previous period
                </div>
              </div>
              <Button variant={"blue"} className="flex items-center mt-4">
                <div>View More</div>
                <div className="ml-2">
                  <ChevronRight />
                </div>
              </Button>
            </div>
            <div className="w-32 h-32">
              <DonutChart />
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-4">We craft digital, graphic and dimensional thinking</div>
        </div>
      </Card>
    </>
  );
};

export default MonthlyEarningCard;
