export interface Transaction {
    orderId: string;
    billingName: string;
    date: string;
    total: number;
    paymentStatus: string;
    paymentMethod: string;
  }