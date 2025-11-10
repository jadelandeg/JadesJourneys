import LogIn from "./components/auth/log-in";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1>Welcome to Journey Planner</h1>
      <LogIn />
    </main>
  );
}
