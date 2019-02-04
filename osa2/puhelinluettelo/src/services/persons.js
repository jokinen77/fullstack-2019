import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const remove = id => {
  console.log('id: ', id);
  const url = `${baseUrl}/${id}`

  return axios
    .delete(url)
    .then(response => {
      console.log('poistettu');
    })
}

export default { getAll, create, update, remove }
