import React, { useEffect, useState } from 'react'

export default function PokemonCard({ name, url }) {

  const [pokemon, setPokemon] = useState({})
  useEffect(() => {
    getPokemonData()
  }, [])

  const getPokemonData = () => {
    fetch(url).then(res => 
      res.json()
    ).then((pokemonData) => {
      setPokemon(pokemonData)
    })
  }

  return (
    <div className='border border-gray-400 rounded-lg flex flex-col justify-center'>
      <img src={pokemon?.sprites?.front_default} alt={pokemon?.forms?.name} />
      <h2 className='text-center'>{ name }</h2>
    </div>
  )
}
