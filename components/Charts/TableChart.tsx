import { Transaction } from "@/types/types";
import { Card } from "../ui/card";
import { transactions } from "@/constants/constant";



const TableChart: React.FC = () => {
  

  const handleViewDetails = (transaction: Transaction) => {
    console.log('View details for transaction:', transaction);
  };

  return (
    <Card className="">
        <div className="px-4 py-2 flex items-center justify-between bg-[#eff2f7] font-semibold">
        <div className="flex-1">OrderID</div>
          <div  className="flex-1">Billing Name</div>
          <div className="flex-1">Date</div>
          <div className="flex-1">Total</div>
          <div className="flex-1">Payment Status</div>
          <div className="flex-1">Payment Medivod</div>
          <div className="flex-1">View Details</div>
        </div>
        <div>
        {transactions.map((transaction, index) => (
          <div key={index} className="px-4 py-2 flex items-end justify-between border bg-[#ffffff]">
            <div className="flex-1">{transaction.orderId}</div>
            <div className="flex-1">{transaction.billingName}</div>
            <div className="flex-1">{transaction.date}</div>
            <div className="flex-1">{transaction.total}</div>
            <div className="flex-1">{transaction.paymentStatus}</div>
            <div className="flex-1">{transaction.paymentMethod}</div>
            <div className="flex-1">
              <button onClick={() => handleViewDetails(transaction)}>View</button>
            </div>
          </div>
        ))}
        </div>
    </Card>

  );
};

export default TableChart;
