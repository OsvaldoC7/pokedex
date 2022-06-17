import React from 'react'
import PokemonGrid from '../components/PokemonGrid'
import useGetAllPokemons from '../hooks/useGetAllPokemos'

export default function Pokemon() {
  const { pokemons, isLoading } = useGetAllPokemons()

  return (
    <div className='p-4'>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
