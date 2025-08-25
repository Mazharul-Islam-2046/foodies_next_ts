"use client";

import { FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";
import { loginWithOAuth } from "@/actions/auth";

const OAuthBtn = () => {
  return (
    <>
      <Button
        type="button"
        onClick={() => loginWithOAuth("google")}
        variant="outline"
        className="w-full"
      >
        <FaGoogle className="mr-2" />
        Continue with Google
      </Button>
    </>
  );
};

export default OAuthBtn;
