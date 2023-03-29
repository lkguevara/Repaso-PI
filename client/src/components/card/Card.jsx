import React from 'react'

const Card = ({id, name, email, phone, website}) => {
  return (
    <div>
      <p> id: {id}</p>
      <p>name:{name}</p>
      <p>email:{email}</p>
      <p>phone:{phone}</p>
      <p>website:{website}</p>
      
    </div>
  )
}

export default Card