import { useState, useEffect } from "react";
import personService from './services/entries'
import Header from './components/Header';
import PersonForm from "./components/PersonForm";
import People from "./components/People";
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [update, setUpdate] = useState("");
  const [newFilterValue, setNewFilterValue] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPeople) => {
      const useme = initialPeople.filter(people => people.name.toLocaleLowerCase().includes(newFilterValue.toLocaleLowerCase()))
      setPersons(useme)}
      )
    },[newFilterValue]);

   useEffect(() => {
     personService.getAll().then((initialPeople) => {
       const useme = initialPeople.filter((country) =>
         country.name
           .toLocaleLowerCase()
           .includes(newFilterValue.toLocaleLowerCase())
       );
       setPersons(useme);
     });
   }, [update]);  


  const addPerson = (event) => {
    if (persons.some((person) => person.name === newName)) {
      if (
        window.confirm(`${newName} is already add to the phonebook, replace the old number
      with a new one?`)
      ) {
        const index = persons.findIndex((x) => x.name === newName);
        const replacementId = persons[index].id;
        const personObject = {
          name: newName,
          number: newNumber,
          id: replacementId,
        };
        personService.update(replacementId, personObject);
      }
    } else {
      event.preventDefault();
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };

      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilterValue(event.target.value);
  };

  const deleteSelectedPerson = (id) => {
    personService.deletePerson(id).then((res) => {
      setUpdate(id);
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filtervalue={newFilterValue} filterChange={handleFilterChange} />
      <Header text="add a new" />
      <PersonForm
        onSubmit={addPerson}
        namevalue={newName}
        namechange={handlePersonChange}
        numbervalue={newNumber}
        numberchange={handleNumberChange}
      />
      <Header text="Numbers" />
      {Array.from(persons).map((people) => (
        <People
          people={people}
          key={people.id}
          handleClick={() => {
            if (window.confirm(`Do you really want to delete ${people.name}`)) {
              deleteSelectedPerson(people.id);
            }
          }}
        />
      ))}
    </div>
  );
};

export default App;
