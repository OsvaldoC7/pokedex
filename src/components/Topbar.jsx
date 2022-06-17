import React from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export default function Topbar() {

  const activeClass = 'text-indigo-500'
  const basicClass = 'text-slate-100 hover:text-slate-400'

  const routes = [
    { to: '/', label: 'Home' },
    { to: '/types', label: 'Types' },
    { to: '/pokemon', label: 'Pokemon' },
  ]

  return (
    <div className='bg-slate-800 p-4 flex flex-row justify-evenly'>
      {
        routes.map(route => (
          <NavLink 
            to={route.to}
            key={uuidv4()} 
            className={({ isActive }) => isActive ? activeClass : basicClass}
          >
            { route.label }
          </NavLink>
        ))
      }
    </div>
  )
}
