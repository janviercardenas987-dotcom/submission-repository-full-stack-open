import { useEffect, useState } from "react";
import Filter from "./Components/Filter";
import Person from "./Components/Persons";
import Number from "./Components/Number";
import PersonForm from "./Components/PersonForm";
import personsServices from "./services/persons";
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

    personsServices
    .create(nameObject)
    .then(returnedPerson => {
      console.log(returnedPerson)
      setPersons(persons.concat(returnedPerson)); 
      setNewName('');
      setNewNumber('');
    })
  }

  const hook = () => {
    personsServices
    .getAll()
    .then(returnedPerson => {
      setPersons(returnedPerson)
    })
  };

  useEffect(hook, []);

  console.log(`render ${persons.length} notes`);

  const toggleDelete = (id) => {
    const ok = window.confirm(`Do you want delete this person?`)
    if(ok){
      personsServices
      .deletePerson(id)
      .then(response => {
      setPersons(persons.filter(p => p.id !== id))
    })
    return
    }
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
        
        <Number filterPerson={filterPerson} toggleDelete={toggleDelete}/>
    </div>
  )
}

export default App;