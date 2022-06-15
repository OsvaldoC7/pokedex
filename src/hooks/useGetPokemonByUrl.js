import { useEffect, useState } from "react"
import { getPokemonByUrl } from "../services/getPokemonByUrl"

export default function useGetPokemonByUrl({ url }) {
  const [pokemon, setPokemon] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getPokemonData = async () => {
    const { pokemonData } = await getPokemonByUrl(url)
    setPokemon(pokemonData)
    setIsLoading(false)
  }

  useEffect(() => {
    getPokemonData()
  }, [])

  return { pokemon, isLoading }
}