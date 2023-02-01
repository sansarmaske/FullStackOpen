import axios from "axios";
const baseUrl = "http://localhost:3001/persons"

const getAll = () => axios.get(baseUrl)
const create = newPerson => axios.post(baseUrl,newPerson)
//const update = (id, newPerson)


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll: getAll,
    create: create
}