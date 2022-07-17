import React from 'react'
import Card from './Card'
import {person} from './Person'
function CardList({person}) {
  return (
    <div>
        {person.map((item,index) => {
            return <Card 
            firstName= {item.title} 
            key = {index}
            />
            })}
    </div>
  )
}

export default CardList