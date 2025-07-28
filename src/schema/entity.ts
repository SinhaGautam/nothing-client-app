export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  featured?: boolean;
}

export interface PaymentTransaction {
  _id?: string;
  orderId: string;
  orderNumber: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  status: 'pending' | 'completed' | 'failed';
  customerEmail: string;
  customerName: string;
  productId: number;
  productName: string;
  transactionId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EmailRecord {
  _id?: string;
  email: string;
  customerName: string;
  orderNumber: string;
  emailType: 'confirmation' | 'receipt' | 'notification';
  sentAt: Date;
  status: 'sent' | 'failed' | 'pending';
  retryCount: number;
}

export interface OrderDetails {
  _id?: string;
  orderNumber: string;
  productId: number;
  productName: string;
  productCategory: string;
  customerEmail: string;
  customerName: string;
  amount: number;
  status: 'confirmed' | 'processing' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed';
  sharedOnSocial: boolean;
  socialShares: {
    platform: string;
    sharedAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}