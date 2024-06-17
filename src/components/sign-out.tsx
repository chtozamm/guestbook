import { signOut } from "@/auth";

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="dark:hover:bg-utility-dark rounded-md px-2 py-1 font-medium outline-none transition-colors duration-500 ease-in-out hover:bg-utility focus-visible:ring-2 focus-visible:ring-accent"
      >
        Sign out
      </button>
    </form>
  );
}
