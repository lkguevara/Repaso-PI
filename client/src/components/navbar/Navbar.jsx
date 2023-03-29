import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <form>
        <input type="text" placeholder="Search" />
        <button>
          Buscar
        </button>
        <br />
        <Link to="/home">Ir a Home</Link>
        <Link to="/create">Realizar un create</Link> <br />
      </form>

    </div>
  )
}

export default Navbar