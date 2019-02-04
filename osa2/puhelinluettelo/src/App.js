import React, { useState, useEffect } from 'react'
import NewPersonForm from './components/NewPersonForm'
import PersonsDataTable from './components/PersonsDataTable'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')
  const [errorMessage, setErrorMessage] = useState('virhe...')

  const hook = () => {
    personService
      .getAll()
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
    persons.map(p => p.name).includes(person.name) ? alert(`${newName} on jo luettelossa!`) :
    personService
      .create(person)
      .then(response => {
        setPersons(persons.concat(person))
        setNewName('')
        setNewNumber('')
        setErrorMessage(`Henkilö '${person.name}' lisätty palvelimelle`)
      })

  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <div className="error">
        {message}
      </div>
    )
  }

  const deletePerson = ({ id }) => {
    window.confirm('Are you sure?') ? personService.remove(id) : console.log('Ei poistettukkaan')
    setErrorMessage(`Henkilö '${id}' poistettu palvelimelta`)
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
      <Notification message={errorMessage} />
      <NewPersonForm
        name={newName}
        number={newNumber}
        handleName={handlePersonChange}
        handleNumber={handleNumberChange}
        addPerson={addPerson} />
      <PersonsDataTable
        persons={persons}
        nameFilter={nameFilter}
        handleNameFiltering={handleNameFiltering}
        deletePerson={deletePerson} />
    </div>
  )
}

export default App
