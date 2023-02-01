import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [namesToShow, setNamesToShow] = useState(persons)
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    // console.log('effect');
    personService
      .getAll()
      .then(response => {
        // console.log(response.data)
        setPersons(response.data)
      })
  }, [])


  //  console.log(persons);
  const addPerson = (event) => {
    event.preventDefault()
    setShowAll(true)
    // console.log(event)
    if (persons.filter(person => person.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      //const newPerson = persons.concat({ name: newName, number: newNumber, id: persons[persons.length - 1].id + 1 })
      const newPerson = { name: newName, number: newNumber }
      personService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
        })

      //setPersons(newPerson)


    }


  }

  const handleNameChange = (event) => {
    // console.log(event)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    if (event.target.value.trim() === "") {
      setShowAll(true)
    } else {
      setShowAll(false)
      setNamesToShow(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />

      <h2> add a new</h2>
      <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleOnSubmit={addPerson} />

      <h2>Numbers</h2>
      {showAll ? persons.map(person => <Persons person={person} key={person.id} />) : namesToShow.map(person => <Persons person={person} key={person.id} />)}

    </div>
  )
}

export default App