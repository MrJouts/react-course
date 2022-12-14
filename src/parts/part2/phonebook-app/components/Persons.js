import Person from "./Person"

const Persons = ({persons, deletePerson}) => {
    return persons.map(person => 
        <Person key={person.name} name={person.name} number={person.number} deletePerson={() => deletePerson(person)} />
    )
}

export default Persons