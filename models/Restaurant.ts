import { Discount } from "./Discount";
import { Meal } from "./Meal";

export interface Restaurant {
    id: string;
    ownerId: string;
    name: string;
    logo?: string;
    rating: number;
    description?: string;
    address: string;
    phoneNumber?: string;
    email?: string;
    menu: Meal[];
    createdAt: Date;
    updatedAt: Date;
    Discount?: Discount[];
}