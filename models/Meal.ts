export type MealCategory = "STARTER" | "MAIN_COURSE" | "DESSERT" | "BEVERAGE" | "SNACK" | "SALAD" | "SOUP" | "APPETIZER" | "SIDE_DISH" | "BREAKFAST" | "LUNCH" | "DINNER" | "VEGAN" | "VEGETARIAN" | "GLUTEN_FREE" | "KETO" | "PALEO" | "DIET" | "OTHER";

export interface Meal {
    id: string;
    restaurantId: string;
    name: string;
    description?: string;
    price: number;
    image?: string;
    quantity: number;
    category?: MealCategory | string; // Allow custom categories as strings and it needs to be uppercase
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
}