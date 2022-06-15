export const getPokemonByUrl = async (url) => {
  const res = await fetch(url)
  const pokemonData = await res.json()

  return { pokemonData }
}