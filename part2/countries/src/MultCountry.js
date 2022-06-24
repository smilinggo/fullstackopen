import { v4 as uuidv4 } from "uuid";

const MultiCountry = ({ item }) => {
  return (
    <div>
      <h1>{item.name["common"]}</h1>
      <li style={{ listStyleType: "none" }}>capital {item.capital}</li>
      <li style={{ listStyleType: "none" }}>area {item.area}</li>
      <h2>languages:</h2>
      <ul>
        {Object.values(item.languages).map((value, index) => (
          <li key={uuidv4()}>{value}</li>
        ))}
      </ul>

      <img width={200} src={item.flags.png} alt="flag" />
    </div>
  );
};

export default MultiCountry;
