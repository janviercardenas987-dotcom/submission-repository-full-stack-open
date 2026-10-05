import { useState } from "react";
import Filter from "./Components/Filter";
import Person from "./Components/Persons";
import Number from "./Components/Number";
import PersonForm from "./Components/PersonForm";

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

        <Filter 
        filter={filter} 
        handleFilterPerson={handleFilterPerson}
        />

        <h2>Add a new</h2>
        <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        />

        <h2>Numbers</h2>


        <Number filterPerson={filterPerson}/>
    </div>
  )
}

export default App;