import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Person() {
  const { id } = useParams();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((json) => setUser(json));
  }, [id]);

  return (
    <>
      <h1>Hi there user #{id}</h1>
      <p style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
        {JSON.stringify(user, null, 4)}
      </p>
    </>
  );
}
