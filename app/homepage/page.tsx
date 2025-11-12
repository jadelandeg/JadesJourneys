"use client";
import { useSession } from "next-auth/react";
import LogOutButton from "../components/auth/log-out-button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Map from "../components/journeys/map";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <div>
      <h1>Welcome, {session?.user?.name}!</h1>
      <p>Take a look at your travel dashboard</p>
      <div style={{ height: "500px", width: "100%", padding: "15px" }}>
        <Map />
      </div>
      <LogOutButton />
    </div>
  );
}
