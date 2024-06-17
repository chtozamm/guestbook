"use client";

import { sendMessage } from "@/app/actions";
import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

type MessageFormProps = {
  author: string;
  user_email: string;
};

export default function MessageForm({ author, user_email }: MessageFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [messageState, setMessageState] = useState("");
  const sendMessageAction = async () => {
    if (messageState == "") {
      inputRef.current?.focus();
      return;
    }
    const messageObj = {
      author,
      message: inputRef.current?.value as string,
      user_email,
    };
    const ok = await sendMessage(messageObj);
    if (ok) {
      // toast.success("Message sent", {
      //   className: "text-sm fill-amber-400 text-[#a3be8c]",
      // });
      setMessageState("");
    } else {
      toast.error("Message was not sent", {
        className: "text-sm fill-amber-400 text-[#bf616a]",
      });
    }
  };
  return (
    <form action={sendMessageAction} className="relative flex items-center">
      <input
        ref={inputRef}
        value={messageState}
        onChange={(e) => setMessageState(e.target.value)}
        placeholder="Your message..."
        className="border-utility bg-snow h-10 w-full rounded-md border py-1.5 pl-4 pr-28 outline-none transition-colors duration-500 ease-out focus-within:bg-white hover:bg-white"
      />
      <SubmitButton />
    </form>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="focus-visible:ring-accent duration-400 bg-accent absolute right-0 flex h-full w-16 items-center justify-center rounded-r-md text-xs font-semibold uppercase outline-none transition-colors ease-out hover:bg-opacity-75 focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      {pending ? <LoadingSpinner isShown={pending} /> : "Send"}
    </button>
  );
};

const LoadingSpinner = ({ isShown }: { isShown: boolean }) => (
  <svg
    className={`${!isShown && "hidden"} absolute h-5 w-5 animate-spin`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
