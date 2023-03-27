import { Link } from "react-router-dom";

export default function Books() {
  return (
    <>
      <h1>Hello, Books</h1>
      <a href='/'>Take me drunk</a>
      <Link to={"/"}>I'm Home</Link>
    </>
  );
}
