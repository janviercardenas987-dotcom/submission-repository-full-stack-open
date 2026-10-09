import { useEffect, useState } from "react";
import Filter from "./Components/Filter";
import Number from "./Components/Number";
import PersonForm from "./Components/PersonForm";
import personsServices from "./services/persons";
import Notification from "./Components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('some error happened...')

  useEffect(() => {
    personsServices.getAll().then(setPersons);
  }, []);

  const addName = (event) => {
    event.preventDefault();

    const nameObject = { name: newName, number: newNumber };
    const existing = persons.find(p => p.name === newName);

    if (existing) {
      const ok = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      if (ok) {
        personsServices
          .update(existing.id, nameObject)
          .then(returnedPerson => {
            setPersons(persons.map(p =>
              p.id === existing.id ? returnedPerson : p
            ));
            setNewName('');
            setNewNumber('');
          })
          .catch(error => console.error('Error al actualizar:', error));
      }
      return;
    }

    if (persons.some(p => p.number === newNumber)) {
      window.alert(`${newNumber} is already added to phonebook`);
      return;
    }

    personsServices
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(prev => prev.concat(returnedPerson));
        setNotificationMessage(
          `Added ${newName}`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 8000)
        setNewName('');
        setNewNumber('');
      })
      .catch(error => console.error('Error al crear:', error));
  };

  const toggleDelete = (id) => {
    const ok = window.confirm('Do you want to delete this person?');
    if (!ok) return;

    personsServices
      .deletePerson(id)
      .then(() => {
        setPersons(prev => prev.filter(p => p.id !== id));
      })
      .catch(error => console.error('Error al eliminar:', error));
  };

  const filterPerson = persons.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);
  const handleFilterPerson = (e) => setFilter(e.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage}/>
      <Filter 
      filter={filter} 
      handleFilterPerson={handleFilterPerson} />

      <h2>Add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Number filterPerson={filterPerson} toggleDelete={toggleDelete} />
    </div>
  );
};

export default App;