import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  let [namesToShow, setNamesToShow] = useState(persons)



  const addPerson = (event) => {
    event.preventDefault()
    // console.log(event)
    if (persons.filter(person => person.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPerson = persons.concat({ name: newName, number: newNumber, id: persons[persons.length - 1].id + 1 })
      setPersons(newPerson)
      setNamesToShow(newPerson)

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

    setNamesToShow(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />

      <h2> add a new</h2>
      <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleOnSubmit={addPerson} />

      <h2>Numbers</h2>
      {namesToShow.map(person => <Persons person={person} key={person.id} />)}

    </div>
  )
}

export default App