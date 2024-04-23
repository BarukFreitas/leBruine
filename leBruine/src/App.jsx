import React from 'react'
import { Outlet } from 'react-router-dom'
import Restaurantes from './restaurantes'

const App = () => {
  return (
    <div>
      <Outlet />
      <Restaurantes />
    </div>
  )
}

export default App
