import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewPersonForm from './components/NewPersonForm'
import PersonsDataTable from './components/PersonsDataTable'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')

  const hook = () => {
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      const persons = response.data
      setPersons(persons)
    })
  }
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }

    persons.map(p => p.name).includes(person.name) ? alert(`${newName} on jo luettelossa!`) : setPersons(persons.concat(person))
    setNewName('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFiltering = (event) => {
    setNameFilter(event.target.value)
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <NewPersonForm
        name={newName}
        number={newNumber}
        handleName={handlePersonChange}
        handleNumber={handleNumberChange}
        addPerson={addPerson} />
      <PersonsDataTable
        persons={persons}
        nameFilter={nameFilter}
        handleNameFiltering={handleNameFiltering} />
    </div>
  )
}

export default App
