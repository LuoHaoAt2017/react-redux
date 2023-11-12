import * as React from "react";
import { useGetPokemonByNameQuery } from "../../services/pokemon";

export default function Pokemon({ name, pollingInterval }) {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name, {
    pollingInterval,
  });

  return (
    <div className="Pokemon">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
}
