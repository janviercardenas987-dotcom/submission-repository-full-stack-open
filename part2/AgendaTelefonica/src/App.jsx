import { useState } from "react";
import Person from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number:'040-123456'}

  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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
    name: newName,
    number: newNumber,
    };
    setPersons(persons.concat(nameObject)); 
    setNewName('');
    setNewNumber('');
     
  }


  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  return(
    <div>
        <h2>Phonebook</h2>
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
          <ul>{persons.map(person =>  
            <Person key={person.name} person={person}/>)}
          </ul>
        </div>
        
      <div>debug: {newName}</div>
    </div>
  )
}

export default App;