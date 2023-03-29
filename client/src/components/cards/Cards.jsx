import React from 'react'
import Card from '../card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../redux/actions'
import { useEffect } from 'react'

const Cards = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [])


  return (
    <div>
      <p>Usuarios</p>
      <div>
        {users.map(user => {
          return <Card 
            id={user.id}
            key={user.id} 
            name={user.name} 
            email={user.email}
            phone={user.phone}
            website={user.website}
          />
        } )}
      </div>
    </div>
  )
}

export default Cards