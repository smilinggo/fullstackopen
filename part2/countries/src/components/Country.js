import Countries from "./Countries";
import OneCountry from "./OneCountry";
import MultiCountry from "../MultCountry";
import { v4 as uuidv4 } from "uuid";
import {useState} from "react"

const Country = ({ country }) => {
const [open, setOpen] = useState(Array.from(country, () => false));

const toggle = (index, value) => {
  const newOpenState = [...open];
  newOpenState[index] = value ?? !newOpenState[index];
  setOpen(newOpenState);
};
    if (country.length > 10 ) {
        return (
        <p>Too many matches, specify another filter</p>)
    } else if (country.length === 1) {
        return(
        <OneCountry item={country} />
        )
    }
    else  {
        return country.map((people, index) => (
          <div key={uuidv4()}>
            <Countries key={index} item={people} />
            <button
              onClick={() => toggle(index)}
            >show</button>
            {open[index] && (
              <MultiCountry item={country[country.indexOf(people)]} />
            )}
          </div>
        ));
    }
  };

export default Country;
