import React from 'react'
import PokemonCard from './PokemonCard'
import { v4 as uuidv4 } from 'uuid'

export default function PokemonGrid({ pokemons }) {

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
      {
        pokemons.map(({pokemon}) => {
          return <PokemonCard key={uuidv4()} name={pokemon.name} url={pokemon.url} />
        })
      }
    </div>
  )
}
