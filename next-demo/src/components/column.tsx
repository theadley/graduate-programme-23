import { IColumn } from "@/models/columns";
import AddItem from "./addItem";
import TodoItem from "./todoItem";

interface IColumnProps {
  column: IColumn;
  columns: IColumn[];
}

export default function Column({ column, columns }: IColumnProps) {
  return (
    <div className='rounded-lg bg-gray-900 h-full w-80 p-4 flex flex-col gap-4'>
      <span className='text-xl mb-4'>{column.name}</span>
      {column.expand?.["items(column)"]?.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          columns={columns}
        />
      ))}
      <AddItem column={column} />
    </div>
  );
}
