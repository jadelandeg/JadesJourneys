"use client";
import { signIn } from "next-auth/react";

export default function LogInButton() {
  return <button onClick={() => signIn()}>Log In with Google</button>;
}
