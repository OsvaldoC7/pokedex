import React from 'react'
import DamageRelations from './DamageRelations'
import PokemonGrid from './PokemonGrid'
import useGetPokemonsByType from '../hooks/useGetPokemosByType'
import Loading from './Loading'
import { formatCapitalizeFirstLetter } from '../utils/format'

export default function Type({ type }) {

  const { pokemons, damageRelations, isLoading } = useGetPokemonsByType({ type })
  
  return (
    <div>
      { 
        isLoading ? 
        <Loading /> : 
        <div>
          <h3 className={`text-2xl text-semibold text-${type}`}>
            { formatCapitalizeFirstLetter(type) }
          </h3>
          <DamageRelations damageRelations={damageRelations} />
          <PokemonGrid pokemons={pokemons} />
        </div>
      }
    </div>
  )
}
