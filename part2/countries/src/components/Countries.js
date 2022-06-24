const Countries = ({ item }) => {

  return (
  <div>
    <li style={{ listStyleType: "none" }}>{item.name.common}</li>
  </div>
  )
};

export default Countries;
