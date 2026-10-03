import { useState } from "react";
import Person from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ]);

  const [newName, setNewName] = useState('');

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
    };

    setPersons(persons.concat(nameObject)); 
    setNewName('');
  }
// Falta: value={newName} y onChange={handleNameChange} dentro de la etiqueta ``.
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }
  
  return(
    <div>
        <h2>Phonebook</h2>
        <form onSubmit={addName}>
          <div>
            name: <input 
            value={newName}
            onChange={handleNameChange}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
          <ul>{persons.map(person =>  
            <Person person={person} />)
          }</ul>
          <h2>Numbers</h2>
          
        </form>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App;