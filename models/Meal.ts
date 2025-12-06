export type MealCategory = "STARTER" | "MAIN_COURSE" | "DESSERT" | "BEVERAGE" | "SNACK" | "SALAD" | "SOUP" | "APPETIZER" | "SIDE_DISH" | "BREAKFAST" | "LUNCH" | "DINNER" | "VEGAN" | "VEGETARIAN" | "GLUTEN_FREE" | "KETO" | "PALEO" | "DIET" | "OTHER";

<<<<<<< HEAD
export interface Meal {
=======
export interface IMeal {
>>>>>>> baf2801 (Installed the RTK and added the User RTK API)
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