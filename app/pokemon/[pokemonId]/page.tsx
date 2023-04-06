"use client";
import React, { useEffect, useState } from "react";
import getPokemon from "@/libs/getPokemon";
import PokeFeed from "@/components/PokeFeed";
import { motion } from "framer-motion";
type Props = {
  params: {
    pokemonId: string;
  };
};

interface IPokemon {
  id: string;
  name: string;
  weight: number;
  abilities: { ability: { name: string } }[];
  moves: { move: { name: string } }[];
  base_experience: number;
  sprites: { front_shiny: string };
  types: { type: { name: string } }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}

function Page({ params: { pokemonId } }: Props) {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);
  const [shiny, setShiny] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const pokemonData = await getPokemon(pokemonId);
        setPokemon(pokemonData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [pokemonId]);

  if (!pokemon) {
    return <h1>No Results</h1>;
  }

  const statsData = JSON.parse(
    ' [{"base_stat":106,"effort":0,"stat":{"name":"hp","url":"https://pokeapi.co/api/v2/stat/1/"}},{"base_stat":90,"effort":0,"stat":{"name":"attack","url":"https://pokeapi.co/api/v2/stat/2/"}},{"base_stat":130,"effort":0,"stat":{"name":"defense","url":"https://pokeapi.co/api/v2/stat/3/"}},{"base_stat":90,"effort":0,"stat":{"name":"special-attack","url":"https://pokeapi.co/api/v2/stat/4/"}},{"base_stat":154,"effort":3,"stat":{"name":"special-defense","url":"https://pokeapi.co/api/v2/stat/5/"}},{"base_stat":110,"effort":0,"stat":{"name":"speed","url":"https://pokeapi.co/api/v2/stat/6/"}}]'
  );

  const stats = pokemon.stats.map(({ base_stat, stat }) => ({
    baseStat: base_stat,
    name: stat.name,
  }));

  const abilityNames = pokemon.abilities.map(({ ability }) => ability.name);
  const moveNames = pokemon.moves.map(({ move }) => move.name);

  return (
    <div className="flex flex-col justify-center py-4 items-center px-5">
      <div className="flex items-center justify-between gap-4">
        <PokeFeed
          name={pokemon.name}
          weight={pokemon.weight}
          id={pokemon.id}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
          type={pokemon.types.map(({ type }) => type.name)}
        />

        {shiny && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <PokeFeed
              name={pokemon.name}
              weight={pokemon.weight}
              id={pokemon.id}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemon.id}.png`}
              type={pokemon.types.map(({ type }) => type.name)}
            />
          </motion.div>
        )}
      </div>
      <button
        className={`px-6 py-3 rounded-lg text-lg transition-all duration-500 my-4 ${
          shiny ? "bg-amber-400" : "bg-white"
        }`}
        onClick={() => setShiny(!shiny)}
      >
        {shiny ? "Normal" : "Shiny"}
      </button>

      <h1 className="detail">Abilities: {abilityNames.join(", ")}</h1>
      <h1 className="detail">Base Experience: {pokemon.base_experience}</h1>
      <h1 className="detail">Moves: {moveNames.join(", ")}</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {stats.map(({ baseStat, name }) => (
          <div key={name}>
            <p className="text-white text-xl font-semibold">
              {name}: {baseStat}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
