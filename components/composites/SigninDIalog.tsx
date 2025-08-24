import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoginForm } from "./login-form";

const SigninDIalog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className="btn">Sign In</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] px-8 py-8">
          <DialogHeader>
            <DialogTitle>Welcome back</DialogTitle>
            <DialogDescription>
              Enter your email to sign in to your account
            </DialogDescription>
          </DialogHeader>
          <LoginForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SigninDIalog;
