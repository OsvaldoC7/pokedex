import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { formatDamageRelations } from '../utils/format'
import TypeBadge from './TypeBadge'

export default function DamageRelations({ damageRelations }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {
        Object.keys(damageRelations).map(key => (
          <div key={uuidv4()}>
            <h2 className='font-semibold'>{ formatDamageRelations(key) }</h2>
            <div className="grid grid-cols-5 gap-2">
              {
                damageRelations[key].map(type => (
                    <TypeBadge key={uuidv4()} type={type} />
                  )
                )
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}
