import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="h-screen w-full flex flex-col">
      <header className="bg-slate-800 w-full p-3 h-16 flex items-center">
        <UserButton afterSignOutUrl="/" />
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div>Hello {user?.firstName}!</div>
      </main>
    </div>
  );
}
