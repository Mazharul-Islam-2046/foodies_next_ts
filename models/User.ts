export type UserRole = "USER" | "RESTAURANT" | "DELIVERY" | "ADMIN";

<<<<<<< HEAD
export interface User {
=======
export interface IUser {
>>>>>>> baf2801 (Installed the RTK and added the User RTK API)
    id: string;
    name: string;
    email: string;
    passwordHash?: string; // optional only avaiable id using credentials auth;
    image?: string;
    address?: string;
    phoneNumber?: string;
    role: UserRole;
    favorites: {
        resturants: string[];
        meals: string[];
    };
    orderHistory: string[];
    createdAt: Date;
    updatedAt: Date;
}