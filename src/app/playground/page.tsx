"use client";
import ThemeToggle from "@/components/theme-toggle";
import MessageForm from "./play-message-form";
import Message from "@/components/message";
import { useState } from "react";
import Link from "next/link";

type PlayGuestSign = {
  author: string;
  message: string;
};

export default function Playground() {
  const [records, setRecords] = useState<PlayGuestSign[]>([]);
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-2xl flex-col px-4 py-8 lg:px-0">
      <header className="flex justify-between">
        <h1 className="px-2 text-2xl font-bold lowercase">Playground</h1>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="dark:hover:bg-utility-dark rounded-md px-2 py-1 font-medium outline-none transition-colors duration-500 ease-in-out hover:bg-utility focus-visible:ring-2 focus-visible:ring-accent"
          >
            Exit
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <section className="mt-8">
        <MessageForm setRecords={setRecords} />
        <ul className="mt-8 flex flex-col gap-3 rounded-md bg-white p-4 shadow-sm transition-colors duration-500 ease-in-out dark:bg-[#292e39] [&_li:nth-child(1)]:border-none [&_li:nth-child(1)]:pt-0 [&_li]:border-t [&_li]:pt-3">
          {records.toReversed().map(({ author, message }, idx) => (
            <Message key={idx} author={author} message={message} />
          ))}
          <Message author={"Mark M"} message={"Nicely 🦖"} />
          <Message
            author={"Mark M"}
            message={
              "What if the message was really long, how would it be displayed on a small screen?"
            }
          />
          <Message author={"Mark M"} message={"Hello there!"} />
        </ul>
      </section>
    </main>
  );
}
