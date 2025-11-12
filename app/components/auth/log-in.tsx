"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LogInButton from "./log-in-button";

export default function LogIn() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/homepage");
    }
  }, [session, router]);

  if (status === "loading") {
    return <p> Loading...</p>;
  }

  return (
    <>
      <LogInButton />
    </>
  );
}
