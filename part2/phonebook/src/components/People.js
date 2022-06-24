const People = ({ people, handleClick}) => {


return (

    <li style={{ listStyleType: "none" }}>{people.name} {people.number}
    <button onClick={handleClick}>delete</button></li>

)

// return (
//   <li>
//     {people.content}
//     <button>{label}</button>
//   </li>
// );
};

export default People;
