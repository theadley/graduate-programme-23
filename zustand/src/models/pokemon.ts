export interface PokemonListResult {
  count: number
  next: string
  previous: unknown
  results: PokemonShort[]
}

export interface PokemonShort {
  name: string
  url: string
}
