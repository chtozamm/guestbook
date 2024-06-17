import { signIn } from "@/auth";
import Image from "next/image";

export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button
        type="submit"
        className="focus-visible:ring-accent duration-400 border-utility hover:bg-utility inline-flex gap-2 rounded-md border px-3 py-2 font-medium text-gray-800 outline-none transition-colors ease-out focus-visible:ring-2"
      >
        <Image
          alt="GitHub logo"
          src="/github-logo.svg"
          width="24"
          height="24"
        />
        Sign in with GitHub
      </button>
    </form>
  );
}
