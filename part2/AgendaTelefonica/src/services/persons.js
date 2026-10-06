import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => {
        return response.data
    })
    
}

const create = newObjetc => {
    const request = axios.post(baseUrl, newObjetc);
    return request.then(response => response.data)
    
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response)
}

export default{ getAll, create, deletePerson};