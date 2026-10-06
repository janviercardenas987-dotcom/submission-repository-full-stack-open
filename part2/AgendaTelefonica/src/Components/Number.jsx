import Person from "./Persons";

const Number = ({filterPerson, toggleDelete}) => {
    return(
        <div>
            <ul>{filterPerson.map(person =>  
                <Person key={person.id} person={person} toggleDelete={toggleDelete}/>)}
            </ul>
        </div>
    )    
}

export default Number;