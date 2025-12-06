export type OrderStatus = "PENDING" | "CONFIRMED" | "PREPARING" | "ON_THE_WAY" | "DELIVERED" | "CANCELLED" | "RETURNED";

<<<<<<< HEAD
export interface Order {
=======
export interface IOrder {
>>>>>>> baf2801 (Installed the RTK and added the User RTK API)
    id: string;
    userId: string;
    restaurantId: string;
    items: {
        mealId: string;
        quantity: number;
        price: number; // price at the time of order
    }[];
    totalAmount: number;
    status: OrderStatus;
    discountApplied?: string[]; // array of discount IDs applied to the order
    deliveryAddress: string;
    deliveryTime?: Date; // optional estimated delivery time
    createdAt: Date;
    updatedAt: Date;
}