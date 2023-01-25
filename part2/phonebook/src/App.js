import { useState } from 'react'

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
      <div>
        filter shown with: <input onChange={handleFilterChange} />
      </div>
      <h2> add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} />
        </div>
        {/* <div>debug: {newNumber}</div> */}
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {namesToShow.map(person => <p key={person.id}>{person.name} {person.number}</p>)}

    </div>
  )
}

export default App