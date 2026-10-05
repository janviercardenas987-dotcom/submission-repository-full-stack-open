import Person from "./Persons";

const Number = ({filterPerson}) => {
    return(
        <div>
            <ul>{filterPerson.map(person =>  
                <Person key={person.id} person={person}/>)}
            </ul>
        </div>
    )    
}

export default Number;