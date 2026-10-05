const Filter = ({filter, handleFilterPerson}) => {
    return(
        <div>
            filter shown with: <input
            value={filter}
            onChange={handleFilterPerson}
            type="text"
            />
        </div>
    )
}

export default Filter;