import React from 'react'
import Person from './Person'

function nameList() {
    const name = ['Gabs', 'Juan']
    const persons = [
    {
        id:1,
        name: 'Gabs',
        age: 30,
        country: 'Usa'
    },
    {
        id:2,
        name: 'Juan',
        age: 20,
        country: 'Germany'
    },
    {
        id:3,
        name: 'Pedro',
        age: 15,
        country: 'Suiza'
    }
    ]
    //const nameList = names.map((name,index)=> <h2 key={index}>{name}</h2>)
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
  return (
    <div>
        {
            //names.map(name => <h2> {name}</h2>)
            
             <div>{personList}</div>
        }
    </div>
  )
}

export default nameList