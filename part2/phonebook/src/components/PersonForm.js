

const PersonForm = (props) => {

    return (
        <form onSubmit={props.onSubmit}>
            <div>
                name: <input value={props.namevalue} onChange={props.namechange} />
            </div>
            <div>
                number: <input value={props.numbervalue} onChange={props.numberchange} />
            </div>
            <div>
            <   button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm;
