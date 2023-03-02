import { useEffect, useState } from "react";

interface ITodo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

const FetchData = () => {
  // let todoItemLocal: ITodo | undefined = undefined;
  const [todoItem, setTodoItem] = useState<ITodo>();

  // Base case 👶🏼
  useEffect(() => {
    console.log("Hi Effects");

    return () => {
      // This only runs when the component is removed
      console.log("Component cleanup time!");
    };
  }, []); // Empty deps means run on spawn

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json() as Promise<ITodo>)
      .then((json) => {
        // todoItem = json;
        setTodoItem(json);
        console.log(todoItem);
      })
      .catch((err) => {
        console.error(err);
        setTodoItem(undefined);
        // todoItem = {} as ITodo;
      });
  }, []);

  return (
    <>
      <h1>Hello FetchData</h1>
      <div>
        <p>ID: {todoItem?.id ?? "Unknown"}</p>
        <p>Completed: {todoItem?.completed ?? "False"}</p>
        <p>Title: {todoItem?.title ?? "Unknown Title"}</p>
        <p>User ID: {todoItem?.userId ?? "Unknown User"}</p>
      </div>
    </>
  );
};

export default FetchData;
