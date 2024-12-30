"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";

const SocialLogins = ({ mode }) => {
  const handleAuth = (event) => {
    signIn("google", { callbackUrl: "http://localhost:3000/bookings" });
  };
  return (
    <>
      <div className="text-xs text-center text-gray-500">
        {mode === "register" ? (
          <Link className="underline" href="/login">
            Login
          </Link>
        ) : (
          <Link className="underline" href="/register">
            Register
          </Link>
        )}{" "}
        or Signup with
      </div>
      <div className="flex gap-4">
        <button className="flex items-center justify-center w-full gap-2 py-2 mt-4 border rounded-md  border-gray-600/30">
          <Image src="/fb.png" alt="facebook" width={40} height={40} />
          <span>Facebook</span>
        </button>
        <button
          onClick={handleAuth}
          className="flex items-center justify-center w-full gap-2 py-2 mt-4 border rounded-md  border-gray-600/30"
        >
          <Image src="/google.png" alt="google" width={40} height={40} />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
