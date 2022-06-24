const Filter = (props) => {
    return (
      <div>
        find countries{" "}
        <input value={props.filterValue} onChange={props.filterChange} />
      </div>
    );
}





export default Filter;