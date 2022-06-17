import { BASE_URL } from "../utils/settings"

export const getAllPokemons = async () => {
  const url = `${BASE_URL}pokemon?limit=${1126}`
  
  const res = await fetch(url)
  const data = await res.json()
  
  const { results } = data

  const pokemons = results.map(pokemon => ({ pokemon }))
  console.log(pokemons);
  return { pokemons }
}