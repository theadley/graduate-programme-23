import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Books from "./routes/books";
import Mark from "./routes/mark";
import Person from "./routes/person";
import Tim from "./routes/tim";
import User from "./routes/user";

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<h1>Hello React Router</h1>}
      />
      <Route
        path='/books'
        element={<Books />}
      />
      <Route
        path='/user'
        element={<User />}>
        <Route
          path='tim'
          element={<Tim />}
        />
        <Route
          path='mark'
          element={<Mark />}
        />
        <Route
          path=':id'
          element={<Person />}
        />
      </Route>
      <Route
        path='*'
        element={
          <>
            <h1>Opps, you done F'd up!</h1>
            <Link to={"/"}>Go Back</Link>
          </>
        }
      />
    </Routes>
  );
}

export default App;
