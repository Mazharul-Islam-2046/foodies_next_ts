<<<<<<< HEAD
import { Discount } from "./Discount";
import { Meal } from "./Meal";

export interface Restaurant {
=======
import { IDiscount } from "./Discount";
import { IMeal } from "./Meal";

export interface IRestaurant {
>>>>>>> baf2801 (Installed the RTK and added the User RTK API)
    id: string;
    ownerId: string;
    name: string;
    logo?: string;
    rating: number;
    description?: string;
    address: string;
    phoneNumber?: string;
    email?: string;
<<<<<<< HEAD
    menu: Meal[];
    createdAt: Date;
    updatedAt: Date;
    Discount?: Discount[];
=======
    menu: IMeal[];
    createdAt: Date;
    updatedAt: Date;
    Discount?: IDiscount[];
>>>>>>> baf2801 (Installed the RTK and added the User RTK API)
}