import { auth } from "@/auth";
import { SignInButton } from "@/components/sign-in";
import { SignOutButton } from "@/components/sign-out";
import { getXataClient } from "@/db/xata";
import MessageForm from "@/components/message-form";
import Message from "@/components/message";

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
    <main className="text-night mx-auto flex w-full max-w-3xl flex-col px-4 py-8 sm:px-8">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold lowercase">Guestbook</h1>
        {session && <SignOutButton />}
      </header>
      <section className="mt-8">
        {session ? (
          <MessageForm author={author} user_email={user_email} />
        ) : (
          <div className="flex select-none flex-col items-center gap-4 sm:flex-row">
            <SignInButton />
            {/* or
            <button className="focus-visible:ring-accent bg-accent duration-400 inline-flex gap-2 rounded-md px-3 py-2 font-medium text-gray-800 outline-none transition-colors ease-out hover:bg-[#79B8CA] focus-visible:ring-2">
              Enter the Playground
            </button> */}
          </div>
        )}
        <ul className="mt-8 flex flex-col gap-3.5 rounded-md bg-white p-4">
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