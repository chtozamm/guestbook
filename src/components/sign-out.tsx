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
        className="focus-visible:ring-accent duration-400 hover:bg-utility rounded-md px-2 py-1 font-medium text-gray-800 outline-none transition-colors ease-out focus-visible:ring-2"
      >
        Sign out
      </button>
    </form>
  );
}
