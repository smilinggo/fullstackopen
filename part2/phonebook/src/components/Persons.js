import People from './People'

const Persons = ({persons}) => {
    return (
        persons.map((people) => (
        <People key={people.id} people={people} />
      ))
    
    )
}

export default Persons;