import React from 'react'


const PersonDataRow = ({ person, deletePerson }) => {
  return (
    <>
      <tr key={person.name}>
        <td>{person.name}</td>
        <td>{person.number}</td>
        <td>
          {console.log(person)}
            <button onClick={() => deletePerson(person)}>poista</button>
        </td>
      </tr>
    </>
  )
}

export default PersonDataRow
