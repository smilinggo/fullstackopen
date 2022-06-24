import { useState, useEffect } from "react"
import Country from './components/Country'
import axios from "axios"
import Filter from './components/Filter'

function App() {
  const [filterCountry, setFilterCountry] = useState([])
  const [newFilterValue, setNewFilterValue] = useState("")

useEffect(() => {
  axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
  const useme = response.data.filter(country => country.name['common'].toLocaleLowerCase().includes(newFilterValue.toLocaleLowerCase()))
  setFilterCountry(useme)}
      )
    },[newFilterValue]);

 const handleFilterChange = (event) => {
    setNewFilterValue(event.target.value);
    };


  return (
    <div>
      <Filter filterChange={handleFilterChange} />
      <Country country={filterCountry}/>
    </div>
  );
};

export default App;
