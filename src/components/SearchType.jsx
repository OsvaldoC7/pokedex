import React, { useState } from 'react'

export default function SearchType({ setTypes }) {

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if(inputValue.trim().length < 1) return
    setTypes([inputValue])
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className='bg-gray-300' 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)}
      />
    </form>
  )
}