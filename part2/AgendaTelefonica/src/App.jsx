import { use, useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ]);

  const [newName, setNewName] = useState('');
  return(
    <div>
      <h2>
        <h2>Phonebook</h2>
        <form>
          <div>
            name: <input />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
          <h2>Numbers</h2>
        </form>
      </h2>
    </div>
  )
}

export default App;