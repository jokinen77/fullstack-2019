import React from 'react'


const PersonDataRow = ({ person }) => {
  return (
    <>
      <tr key={person.name}>
        <td>{person.name}</td>
        <td>{person.number}</td>
      </tr>
    </>
  )
}

export default PersonDataRow
