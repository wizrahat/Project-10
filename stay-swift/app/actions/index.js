// actions.js
"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function login(formData) {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.message) {
        case "MISSING_CREDENTIALS":
          return { error: "Please provide both email and password" };
        case "USER_NOT_FOUND":
          return { error: "No account found with this email" };
        case "INVALID_PASSWORD":
          return { error: "Incorrect password" };
        case "GOOGLE_ACCOUNT":
          return { error: "Please sign in with Google for this account" };
        default:
          return { error: "Incorrect Email or Password." };
      }
    }
    throw error;
  }
}
