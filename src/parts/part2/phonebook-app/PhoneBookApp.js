import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import phoneService from './services/phone'

import "./index.css"
import Notification from './components/Notification'

const PhoneBookApp = () => {
  const [persons, setPersons] = useState([]) 
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    phoneService.getAll()
      .then(allPhones => {
        setPersons(allPhones)
      })
      .catch(err => console.log(err))
  }, [])

  const addPerson = (person) => {
    phoneService.create(person)
      .then(returnedPerson => {
        setNewNotification(
          `Added "${person.name}" to the phonebook`,
          'success'
        )
        setPersons(persons.concat(returnedPerson))
      })
  }

  const updatePerson = (id, person) => {
    phoneService
      .update(id, person)
      .then(returnedPerson => {
        setNewNotification(
          `Updated "${person.name}" profile`,
          'success'
        )
        console.log(persons)
        setPersons(persons.map(person => {
          console.log(person);
          return  person.id === id 
            ? returnedPerson 
            : person
        }
        ))
      })
      .catch(err => {
        setNewNotification(
          `Information of "${person.name}" has already been removed from server`,
          'error'
          )
        setPersons(persons.filter(p => p.name !== person.name))
      })

  }

  const deletePerson = (person) => {
    if(window.confirm(`Delete ${person.name} ?`)) {
      phoneService.deletePerson(person.id)
      .then(_ => {
        setNewNotification(
          `Deleted "${person.name}" from profile`,
          'error'
        )
        setPersons(persons.filter(p => p.id !== person.id))
      })
    }
  }

  const setNewNotification = (message, status) => {
    setNotification({...notification, message, status})
    setTimeout(() => setNotification(null), 3000)
  }

  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredPersons = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange} />

      <h2>Add New</h2>
      <PersonForm persons={persons} addPerson={addPerson} updatePerson={updatePerson} />

      <h2>Numbers</h2>
      {   
          filteredPersons
          ? <Persons persons={filteredPersons} deletePerson={deletePerson} />
          : '...'
      }

     <Notification notification={notification} />
     
    </div>
  )
}

export default PhoneBookApp