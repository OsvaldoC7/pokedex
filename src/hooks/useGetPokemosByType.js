import { BASE_URL } from "../utils/settings"
import { useState } from "react"

export default function useGetPokemonsByType({ type }) {
  const [pokemons, setPokemons] = useState([])
  const [damageRelations, setDamageRelations] = useState({})

  const url = `${BASE_URL}type/${type}`
  fetch(url).then(res => 
    res.json()
  ).then((type) => {
    setPokemons(type.pokemon) 
    setDamageRelations(type.damage_relations) 
  })

  return { pokemons, damageRelations }
}