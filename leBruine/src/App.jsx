import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <p>NavBar</p>
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
