import { useState } from "react";
import Person from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number:'040-123456', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addName = (event) => {
    event.preventDefault();
    if(persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
      return;

    }else if(persons.some(person => person.number === newNumber)){
      window.alert(`${newNumber} is already added to phonebook`);
      return;
    }
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(nameObject)); 
    setNewName('');
    setNewNumber('');
     
  }

  const filterPerson = persons.filter(p => 
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  const handleFilterPerson = (event) => {
    setFilter(event.target.value);
  } 

  return(
    <div>
        <h2>Phonebook</h2>

        <div>
          filter shown with: <input
          value={filter}
          onChange={handleFilterPerson}
           type="text"
            />
        </div>

        <h2>Add a new</h2>
        <form onSubmit={addName}>
          <div>
            name: <input 
            type="text"
            value={newName}
            onChange={handleNameChange}
            required
            />
          </div>
          <div>
            number: <input 
              type="text"
              value={newNumber}
              onChange={handleNumberChange}
              required/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>

        <h2>Numbers</h2>
        <div>
          <ul>{filterPerson.map(person =>  
            <Person key={person.name} person={person}/>)}
          </ul>
        </div>
    </div>
  )
}

export default App;