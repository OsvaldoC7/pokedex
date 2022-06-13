import React from 'react'
import DamageRelations from './DamageRelations'
import PokemonCard from './PokemonCard'
import PokemonGrid from './PokemonGrid'
import useGetPokemonsByType from '../hooks/useGetPokemosByType'

export default function Type({ type }) {

  const { pokemons, damageRelations } = useGetPokemonsByType({ type })
  
  return (
    <div>
      <h3 className='text-2xl text-semibold'>{ type }</h3>
      <DamageRelations damageRelations={damageRelations} />
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
