import { signIn } from "@/auth";
import { Github } from "./icons";

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
        className="dark:border-utility-dark inline-flex gap-2 rounded-md border border-utility px-3 py-2 font-medium outline-none transition-colors duration-500 ease-in-out hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent dark:hover:border-accent"
      >
        {/* <Image
          alt="GitHub logo"
          src="/github-logo.svg"
          width="24"
          height="24"
        /> */}
        <Github className="size-6" />
        Sign in with GitHub
      </button>
    </form>
  );
}
