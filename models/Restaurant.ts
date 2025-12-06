import { IDiscount } from "./Discount";
import { IMeal } from "./Meal";

export interface IRestaurant {
    id: string;
    ownerId: string;
    name: string;
    logo?: string;
    rating: number;
    description?: string;
    address: string;
    phoneNumber?: string;
    email?: string;
    menu: IMeal[];
    createdAt: Date;
    updatedAt: Date;
    Discount?: IDiscount[];
}