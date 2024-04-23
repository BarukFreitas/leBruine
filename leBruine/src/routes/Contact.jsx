import React from 'react'
import { Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <Outlet />
      <h1>Conteúdo de Contato</h1>
    </div>
  )
}

export default Contact
