const Filter = (props) => {
    return (
      <div>
        filter shown with <input value={props.filterValue} onChange={props.filterChange} />
      </div>
    );
}





export default Filter;