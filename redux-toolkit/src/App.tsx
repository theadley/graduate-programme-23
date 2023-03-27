import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Pokemon from "./components/pokemon";
import { RootState } from "./store/store";
import { setAge, setName, setSurname } from "./store/userState";

function App() {
  const dispatch = useDispatch();

  const userState = useSelector((state: RootState) => state.user);

  const derivedName = userState.name;
  const derivedSurname = userState.surname;
  const derivedAge = userState.age;

  const name = useSelector((state: RootState) => state.user.name);
  const surname = useSelector((state: RootState) => state.user.surname);
  const fullName = useSelector(
    (state: RootState) => `${state.user.name} ${state.user.surname}`
  );
  const age = useSelector((state: RootState) => state.user.age);

  return (
    <div className='App'>
      <p>
        Name: {fullName} ({age})
      </p>
      <input
        type='text'
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
      />
      <input
        type='text'
        value={surname}
        onChange={(e) => dispatch(setSurname(e.target.value))}
      />
      <button onClick={() => dispatch(setAge(age + 1))}>Click Me</button>
      <p>
        Name: {derivedName} {derivedSurname} ({derivedAge})
      </p>
      <Pokemon />
    </div>
  );
}

export default App;
