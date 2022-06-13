import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function DamageRelations({ damageRelations }) {
  return (
    <div>
      {
        Object.keys(damageRelations).map(key => (
          <div key={uuidv4()}>
            <h2 className='font-semibold'>{key}</h2>
            {
              damageRelations[key].map(type => <p key={uuidv4()}>{type?.name}</p>)
            }
          </div>
        ))
      }
    </div>
  )
}
