import { useState } from 'react'
import SearchType from '../components/SearchType'
import Type from '../components/Type'

function Types() {

  const [types, setTypes] = useState([])

  return (
    <>
      <h1>Pokedex</h1>
      <SearchType onNewType={ type => setTypes([type, ...types]) } />
      <ul>
        {
          types.map(type => <Type key={type} type={type} />)
        }
      </ul>
    </>
  )
}

export default Types
