import React from 'react'
import PersonDataRow from './PersonDataRow'

const PersonsDataTable = ({ persons, nameFilter, handleNameFiltering}) => {
  return (
    <>
    <h2>Numerot</h2>
    etsi nimellä: <input value={nameFilter} onChange={handleNameFiltering} />
    <table>
      <tbody>
        {persons.filter(p => p.name.toLowerCase().includes(nameFilter.toLowerCase())).map(p =>
          <PersonDataRow key={p.name} person={p} />
        )}
      </tbody>
    </table>
    </>
  )
}

export default PersonsDataTable
