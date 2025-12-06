export type DiscountType = "PERCENTAGE" | "FIXED_AMOUNT" | "BUY_ONE_GET_ONE" | "FREE_DELIVERY" | "SEASONAL" | "LOYALTY" | "PROMOTIONAL" | "ORDER_TOTAL" | "OTHER";

export interface Discount {
    id: string;
    type: DiscountType;
    value: number; // percentage (0-100) for PERCENTAGE, fixed amount for FIXED_AMOUNT, etc.
    minimumOrderValue?: number; // optional minimum order value to apply the discount for ORDER_TOTAL type
    mealId?: string; // optional mealId if the discount is specific to a meal
    restaurantId?: string; // optional restaurantId if the discount is specific to a restaurant
    couponCode?: string; // optional coupon code for PROMOTIONAL type
    isActive: boolean;
    startDate?: Date; // optional start date for the discount
    endDate?: Date; // optional end date for the discount
}