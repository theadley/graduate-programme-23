import Column from "@/components/column";
import { IColumn } from "@/models/columns";
import { PBAPIResponse } from "@/models/shared";

const DB_URL = "http://127.0.0.1:8090/api/";

async function getColumns() {
  const result = await fetch(
    `${DB_URL}collections/columns/records?expand=items(column)`
  );
  const data = (await result.json()) as PBAPIResponse<IColumn>;
  return data?.items ?? [];
}

export default async function TodoPage() {
  const cols = await getColumns();

  return (
    <div className='h-full flex flex-col p-4 bg-gray-800 text-white'>
      <h1 className='text-4xl mb-2'>Kanban Board</h1>
      <div className='flex gap-4 flex-grow'>
        {cols.map((col) => (
          <Column
            key={col.id}
            column={col}
            columns={cols}
          />
        ))}
      </div>
    </div>
  );
}
