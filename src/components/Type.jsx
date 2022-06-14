import React from 'react'
import DamageRelations from './DamageRelations'
import PokemonGrid from './PokemonGrid'
import useGetPokemonsByType from '../hooks/useGetPokemosByType'
import Loading from './Loading'

export default function Type({ type }) {

  const { pokemons, damageRelations, isLoading } = useGetPokemonsByType({ type })
  
  return (
    <div>
      <h3 className='text-2xl text-semibold'>{ type }</h3>
      { isLoading && <Loading /> }
      <DamageRelations damageRelations={damageRelations} />
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
