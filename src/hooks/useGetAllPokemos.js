import { useEffect, useState } from 'react'
import { getAllPokemons } from '../services/getAllPokemons'

export default function useGetAllPokemons() {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getPokemons = async () => {
    const { pokemons } = await getAllPokemons()
    setPokemons(pokemons)
    setIsLoading(false)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return { pokemons, isLoading }
}