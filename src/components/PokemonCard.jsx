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
      {
        pokemon?.sprites?.front_default 
        ? 
        <img src={pokemon?.sprites?.front_default} alt={pokemon?.forms?.name} />
        :
        <div className="text-center flex flex-col">
          <span className='far fa-frown'></span>
          <span>Imagen no disponible</span>
        </div>
      }
      <h2 className='text-center'>{ name }</h2>
    </div>
  )
}
