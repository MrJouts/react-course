import { useState } from 'react'

const PersonForm = ({persons, addPerson, updatePerson}) => {

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()

    if(isNameTaken(newName)) {
        const currentPerson = isNameTaken(newName)
        
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          const note = {
            name: newName,
            number: newNumber
          }
          updatePerson(currentPerson.id, note)
          setNewName('')
          setNewNumber('')
        }
        
    }
    else {
        const note = {
          name: newName,
          number: newNumber
        }
        addPerson(note)
        setNewName('')
        setNewNumber('')
    }
  }

  const isNameTaken = (name) => {
    return (persons.find((person => person.name === name)))
  }

  return(
    <form onSubmit={handleSubmit}>
    <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm