import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function TypeBadge({ type }) {
  return (
    <div className={`bg-${type?.name} rounded p-1`} key={uuidv4()}>
      <span>
        {type?.name}
      </span>
    </div>
  )
}
