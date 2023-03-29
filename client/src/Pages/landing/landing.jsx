import React from 'react'
import { Link } from 'react-router-dom'

const landing = () => {
  return (
    <div>
      <h1>landing</h1>
      <Link to="/home">Ir a Home</Link>
    </div>
  )
}

export default landing