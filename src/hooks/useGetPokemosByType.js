import { useEffect, useState } from "react"
import { getPokemonsByType } from "../services/getPokemonsByType"

export default function useGetPokemonsByType({ type }) {
  const [pokemons, setPokemons] = useState([])
  const [damageRelations, setDamageRelations] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getPokemons = async () => {
    const {pokemon, damage_relations} = await getPokemonsByType(type)
    setPokemons(pokemon)
    setDamageRelations(damage_relations)
    setIsLoading(false)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return { pokemons, damageRelations, isLoading }
}