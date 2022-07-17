import React from 'react'

function Card(props) {
  return (
    <div className='tc bg-light-green dib br ma3 grow'>
      <img src = {`https://robohash.org/${Math.random()}`} alt = 'weird images'/>
      <p>{props.firstName}</p>
    </div>
  )
}
export default Card