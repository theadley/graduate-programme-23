import "./App.css";
import { usePokeStore } from "./store/store";

function App() {
  const pokemonList = usePokeStore((state) => state.pokemon);
  const setState = usePokeStore((state) => state.setState);
  const fetchPokeList = usePokeStore((state) => state.fetchPokemon);
  const storeState = usePokeStore((state) => state.state);

  const updateList = () => {
    setState("loading");
    fetchPokeList();
  };

  return (
    <div className='App'>
      <h1>Hello PokeList</h1>
      <button
        disabled={storeState !== "idle"}
        onClick={() => updateList()}>
        {storeState === "idle"
          ? "Fetch Pokemon!"
          : storeState === "loading"
          ? "Loading..."
          : "Error!"}
      </button>
      <ul>
        {storeState === "idle" &&
          pokemonList.map((pokemon) => (
            <li key={pokemon.url}>{pokemon.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
