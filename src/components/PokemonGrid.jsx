import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonGrid({ pokemons }) {

  return (
    <div className='grid grid-cols-3 gap-4'>
      {
        pokemons.map(({pokemon}) => {
          return <PokemonCard key={pokemon.url} name={pokemon.name} url={pokemon.url} />
        })
      }
    </div>
  )
}
