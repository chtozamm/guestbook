"use server";

import { getXataClient } from "@/db/xata";
import { revalidatePath } from "next/cache";

export type Message = {
  author: string;
  message: string;
  user_email: string; // Used to show to the user his messages even if they are not approved yet
};

// sendMessage creates a new record in the database and returns a promise
// that resolves to true if the operation was successful.
export async function sendMessage({
  author,
  message,
  user_email,
}: Message): Promise<boolean> {
  // Return early if any of the provided values are not truthy
  if (!author || !message || !user_email) {
    return false;
  }
  // Uncomment the next line to artificially slow down the request.
  // await new Promise((resolve) => setTimeout(resolve, 500));
  const xata = getXataClient();
  const record = await xata.db.guest_signs.create({
    author,
    message,
    user_email,
  });
  // If record contains message, then it is considered to be successfully created
  if (record.message) {
    revalidatePath("/");
    return true;
  } else {
    return false;
  }
}
