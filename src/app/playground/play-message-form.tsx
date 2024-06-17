"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

type PlayGuestSign = {
  author: string;
  message: string;
};

export default function MessageForm({
  setRecords,
}: {
  setRecords: Dispatch<SetStateAction<PlayGuestSign[]>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [messageState, setMessageState] = useState("");
  const sendMessageAction = async () => {
    if (messageState == "") {
      inputRef.current?.focus();
      return;
    }
    const messageObj = {
      author: "Me",
      message: inputRef.current?.value as string,
    };
    await new Promise((resolve) => setTimeout(resolve, 200));
    setRecords((prev) => [...prev, messageObj]);
    setMessageState("");
  };
  return (
    <form action={sendMessageAction} className="flex items-center">
      <input
        ref={inputRef}
        value={messageState}
        onChange={(e) => setMessageState(e.target.value)}
        placeholder="Your message..."
        className="h-[42px] w-full rounded-l-md py-1.5 pl-4 pr-28 shadow-sm outline-none transition-colors duration-500 ease-in-out focus-within:bg-snow hover:bg-snow dark:bg-[#292e39] dark:focus-within:bg-opacity-50 dark:hover:bg-opacity-50"
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
      className="bg-light-dark dark:border-utility-dark flex h-10 w-16 items-center justify-center rounded-r-md text-xs font-semibold uppercase text-snow outline-none transition-colors duration-500 ease-in-out hover:bg-opacity-75 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 dark:border dark:bg-[#292e39] dark:hover:border-accent dark:hover:text-accent"
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
