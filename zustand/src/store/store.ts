import { create } from 'zustand';
import { PokemonListResult, PokemonShort } from '../models/pokemon';

interface IPokeState {
  pokemon: PokemonShort[];
  state: 'loading' | 'error' | 'idle';
  fetchPokemon: () => Promise<void>;
  setState: (state: 'loading' | 'error' | 'idle') => void
}

export const usePokeStore = create<IPokeState>((set) => ({
  pokemon: [],
  state: 'idle',
  fetchPokemon: async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    set(
      {
        pokemon: (await (response.json() as Promise<PokemonListResult>)).results,
        state: 'idle'
      }
    )
  },
  setState: (state) => set({ state })
}))