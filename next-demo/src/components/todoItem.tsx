"use client";

import { IColumn } from "@/models/columns";
import { Item } from "@/models/items";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const DB_URL = "http://127.0.0.1:8090/api/";

interface ITODOItemProps {
  item: Item;
  columns: IColumn[];
}

export default function TodoItem({ item, columns }: ITODOItemProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  async function moveItemToNewColumn(newColumnId: string) {
    await fetch(`${DB_URL}collections/items/records/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ column: newColumnId }),
    });

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }

  return (
    <div className='rounded-md bg-gray-500 p-4 cursor-pointer flex flex-col gap-2'>
      {item.name}
      <select
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        value={item.column}
        onChange={(e) => moveItemToNewColumn(e.target.value)}
        name='column'
        id='column-select'
        disabled={isPending}
      >
        {columns?.map((col) => (
          <option key={col.id} value={col.id}>
            {col.name}
          </option>
        ))}
      </select>
    </div>
  );
}
