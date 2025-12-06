export interface IDeliveryMan {
    id: string;
    userId: string; // Reference to the User model
    isAvailable: boolean;
    rating: number; // Average rating from completed deliveries
    assignedOrders: string[]; // Array of Order IDs currently assigned
    blockedByRestaurants: string[]; // Array of Restaurant IDs that have blocked the delivery man
}