import { auth } from "@/auth";
import { SignInButton } from "@/components/sign-in";
import { SignOutButton } from "@/components/sign-out";
import { getXataClient } from "@/db/xata";
import MessageForm from "@/components/message-form";
import Message from "@/components/message";
import { Moon } from "@/components/icons";
import ThemeToggle from "@/components/theme-toggle";

// GuestSign is a record that is returned from database
type GuestSign = {
  id: string;
  author: string;
  message: string;
  user_email: string;
  approved: boolean;
};

export default async function Home() {
  // Get session and assign values for sending messages
  const session = await auth();
  const author = session?.user?.name as string;
  const user_email = session?.user?.email as string;

  // Initialize db client and get all records
  const xata = getXataClient();
  const records = (
    await xata.db.guest_signs
      .select(["id", "author", "message", "user_email", "approved"])
      .getAll()
  ).reverse() as GuestSign[];

  return (
    <main className="relative z-10 mx-auto flex w-full max-w-2xl flex-col px-4 py-8 lg:px-0">
      <header className="flex justify-between">
        <h1 className="px-2 text-2xl font-bold lowercase">Guestbook</h1>
        <div className="flex items-center gap-2">
          {session && <SignOutButton />}
          <ThemeToggle />
        </div>
      </header>
      <section className="mt-8">
        {session ? (
          <MessageForm author={author} user_email={user_email} />
        ) : (
          <div className="flex select-none flex-col items-center gap-4 sm:flex-row">
            <SignInButton />
            {/* or
            <button className="focus-visible:ring-accent bg-accent duration-500 inline-flex gap-2 rounded-md px-3 py-2 font-medium outline-none transition-colors ease-in-out hover:bg-[#79B8CA] focus-visible:ring-2">
              Enter the Playground
            </button> */}
          </div>
        )}
        <ul className="mt-8 flex flex-col gap-3 rounded-md bg-white p-4 shadow-sm transition-colors duration-500 ease-in-out dark:bg-[#292e39] [&_li:nth-child(1)]:border-none [&_li:nth-child(1)]:pt-0 [&_li]:border-t [&_li]:pt-3">
          {records
            .filter(
              (r) => r.message && (r.approved || r.user_email == user_email),
            )
            .map(({ id, author, message }) => (
              <Message key={id} author={author} message={message} />
            ))}
        </ul>
      </section>
    </main>
  );
}
