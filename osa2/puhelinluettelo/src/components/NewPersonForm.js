import React from 'react'

const NewPersonForm = ({ name, number, handleName, handleNumber, addPerson}) => {
  return (
    <>
    <h2>Lisää henkilö</h2>
    <form onSubmit={addPerson}>
      <div>
        nimi: <input value={name} onChange={handleName} />
        numero: <input value={number} onChange={handleNumber} />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
    </>
  )
}

export default NewPersonForm
