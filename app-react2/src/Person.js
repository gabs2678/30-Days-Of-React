import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>My name is {person.name},  age {person.age},  from {person.country}</h2>
    </div>
  )
}

export default Person