"use client";

import { IColumn } from "@/models/columns";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useState, useTransition } from "react";

const DB_URL = "http://127.0.0.1:8090/api/";

interface IAddItemProps {
  column: IColumn;
}

export default function AddItem({ column }: IAddItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [itemText, setItemText] = useState("");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  async function addItemToDB() {
    await fetch(`${DB_URL}collections/items/records`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: itemText, column: column.id }),
    });

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }

  function handleKeyUp(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setIsEditing(false);
    } else if (event.key === "Enter") {
      // Add one to the DB
      addItemToDB();
      setIsEditing(false);
      setItemText("");
    }
  }

  return (
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className='rounded-md bg-gray-500 p-4 cursor-pointer flex flex-col gap-2'
      onClick={() => setIsEditing(true)}
    >
      {!isEditing ? (
        "Add Item +"
      ) : (
        <input
          // rome-ignore lint/a11y/noAutofocus: <explanation>
          autoFocus
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          value={itemText}
          placeholder='Item Name'
          onChange={(e) => setItemText(e.target.value)}
          onKeyUp={handleKeyUp}
          disabled={isPending}
        />
      )}
    </div>
  );
}
