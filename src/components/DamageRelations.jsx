import React from 'react'

export default function DamageRelations({ damageRelations }) {
  return (
    <div>
      {
        Object.keys(damageRelations).map(key => (
          <div>
            <h2 className='font-semibold'>{key}</h2>
            {
              damageRelations[key].map(type => <p>{type?.name}</p>)
            }
          </div>
        ))
      }
    </div>
  )
}
