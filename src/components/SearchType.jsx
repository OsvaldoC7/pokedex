import React, { useState } from 'react'

export default function SearchType({ onNewType }) {

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if(inputValue.trim().length < 1) return
    onNewType(inputValue.trim())
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