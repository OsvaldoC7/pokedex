import React from 'react'
import useGetPokemonByUrl from '../hooks/useGetPokemonByUrl'
import TypeBadge from './TypeBadge'
import { v4 as uuidv4 } from 'uuid'
import Loading from './Loading'
import { formatCapitalizeFirstLetter } from '../utils/format'

export default function PokemonCard({ name, url }) {

  const { pokemon, isLoading } = useGetPokemonByUrl({ url })

  return (
    <div className='border border-gray-400 rounded-lg'>
      {
        isLoading ?
        <Loading /> :
        <div className='flex flex-col items-center justify-center'>
          {
            pokemon?.sprites?.front_default 
            ? 
            <img 
              alt={pokemon?.forms?.name} 
              className='p-4'
              src={pokemon?.sprites?.front_default} 
            />
            :
            <div className="text-center flex flex-col">
              <span className='far fa-frown'></span>
              <span>Imagen no disponible</span>
            </div>
          }
          <div className=''>
            <h2 className='text-center'>
              { formatCapitalizeFirstLetter(name) }
            </h2>
            <div className="flex flex-col space-y-2 justify-center">
              {
                pokemon.types?.map(({ type }) => (
                  <TypeBadge key={uuidv4()} type={type} />
                ))
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}
