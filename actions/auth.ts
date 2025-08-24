import { signIn } from "@/auth"

export const logIn = async (provider: string) => {
    signIn(provider, { callbackUrl: "/" })
}