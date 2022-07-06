import React, { useState } from 'react'

export default function LoginForm() {

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  })

  const { username, password } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return (
    <div className='py-4 space-y-4'>
      <input 
        type="text" 
        className='w-full border px-4 py-2 rounded-lg' 
        value={username}
        name='username'
        placeholder='Username' 
        onChange={onInputChange}
      />
      <input 
        type="text" 
        className='w-full border px-4 py-2 rounded-lg' 
        value={password}
        name='password'
        placeholder='Password' 
        onChange={onInputChange}
      />
    </div>
  )
}
