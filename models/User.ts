export type UserRole = "USER" | "RESTAURANT" | "DELIVERY" | "ADMIN";

export interface IUser {
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