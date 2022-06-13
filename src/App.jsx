import { useState } from 'react'
import SearchType from './components/SearchType'
import PokemonGrid from './components/PokemonGrid'

function App() {

  const [types, setTypes] = useState([])

  return (
    <>
      <h1>Pokedex</h1>
      <SearchType onNewType={ type => setTypes([type, ...types]) } />
      <ul>
        {
          types.map(type => <PokemonGrid key={type} type={type} />)
        }
      </ul>
    </>
  )
}

export default App
