import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { formatCapitalizeFirstLetter } from '../utils/format'

export default function TypeBadge({ type }) {
  return (
    <div 
      className={`bg-${type?.name} rounded p-1 text-center w-20`} 
      key={uuidv4()}
    >
      <span>
        { formatCapitalizeFirstLetter(type?.name) }
      </span>
    </div>
  )
}
