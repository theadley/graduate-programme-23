import { Link, Outlet } from "react-router-dom";

export default function User() {
  const subRoutes = [
    {
      link: "/user/tim",
      name: "Tim",
    },
    {
      link: "/user/mark",
      name: "Mark",
    },
    {
      link: "/user/2",
      name: "Ervin",
    },
  ];
  return (
    <>
      <h1>Hello, User</h1>
      <ul>
        {subRoutes.map((subRoute) => (
          <li key={subRoute.link}>
            <Link to={subRoute.link}>{subRoute.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
