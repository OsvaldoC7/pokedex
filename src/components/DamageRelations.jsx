import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import TypeBadge from './TypeBadge'

export default function DamageRelations({ damageRelations }) {
  return (
    <div>
      {
        Object.keys(damageRelations).map(key => (
          <div key={uuidv4()}>
            <h2 className='font-semibold'>{key}</h2>
            <div className="flex flex-row space-x-2">
              {
                damageRelations[key].map(type => (
                    <TypeBadge type={type} />
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
