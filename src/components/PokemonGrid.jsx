import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/settings'
import DamageRelations from './DamageRelations'
import PokemonCard from './PokemonCard'

export default function PokemonGrid({ type }) {

  const [pokemons, setPokemons] = useState([])
  const [damageRelations, setDamageRelations] = useState({})
  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = () => {
    const url = `${BASE_URL}type/${type}`
    fetch(url).then(res => 
      res.json()
    ).then((type) => {
      setPokemons(type.pokemon)
      setDamageRelations(type.damage_relations)
      console.log(type);}
    )
  }
  
  return (
    <div>
      <h3>{ type }</h3>
      <DamageRelations damageRelations={damageRelations} />
      <ul>
        {
          pokemons.map(({pokemon}) => {
            return <PokemonCard key={pokemon.url} name={pokemon.name} url={pokemon.url} />
          })
        }
      </ul>
    </div>
  )
}
