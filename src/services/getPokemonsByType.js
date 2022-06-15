import { BASE_URL } from "../utils/settings"

export const getPokemonsByType = async (type) => {
  const url = `${BASE_URL}type/${type}`
  
  const res = await fetch(url)
  const typeRes = await res.json()
  
  const { pokemon, damage_relations } = typeRes

  return { pokemon, damage_relations }
}