import { useEffect, useState } from "react";
import Filter from "./Components/Filter";
import Person from "./Components/Persons";
import Number from "./Components/Number";
import PersonForm from "./Components/PersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

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
      name: newName,
      number: newNumber,
    };

    axios
    .post('http://localhost:3001/persons', nameObject)
    .then(response => {
      console.log(response)
      setPersons(persons.concat(response.data)); 
      setNewName('');
      setNewNumber('');
    })
    
  }

  const hook = () => {
    axios.get('http://localhost:3001/persons') 
    .then(response => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  console.log(`render ${persons.length} notes`);


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