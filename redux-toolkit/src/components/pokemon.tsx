import { useGetPokemonByNameQuery } from "../services/pokemon";
const Pokemon = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <>
      {error ? (
        <p>Oh no! Problems happened</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>{data?.species.name}</h3>
          <img
            src={data?.sprites.front_shiny}
            alt={data?.species.name}
          />
        </>
      )}
    </>
  );
};

export default Pokemon;
