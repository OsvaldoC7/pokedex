import React from 'react'
import DamageRelations from './DamageRelations'
import PokemonCard from './PokemonCard'
import useGetPokemonsByType from '../hooks/useGetPokemosByType'

export default function PokemonGrid({ type }) {

  const { pokemons, damageRelations } = useGetPokemonsByType({ type })
  
  return (
    <div>
      <h3 className='text-2xl text-semibold'>{ type }</h3>
      <DamageRelations damageRelations={damageRelations} />
      <div className='grid grid-cols-3 gap-4'>
        {
          pokemons.map(({pokemon}) => {
            return <PokemonCard key={pokemon.url} name={pokemon.name} url={pokemon.url} />
          })
        }
      </div>
    </div>
  )
}
