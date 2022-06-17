import React, { useState } from 'react'

export default function SearchType({ onNewType }) {

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if(inputValue.trim().length < 1) return
    onNewType(
      inputValue
      .trim()
      .toLowerCase()
    )
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className='py-4'>
      <input 
        type="text" 
        className='w-full border px-4 py-2 rounded-lg' 
        value={inputValue} 
        placeholder='Search a type...'
        onChange={e => setInputValue(e.target.value)}
      />
    </form>
  )
}