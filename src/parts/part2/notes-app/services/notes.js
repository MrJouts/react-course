import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  }

  return request.then(response => response.data.concat(nonExisting))
}

const create = (noteObject) => {
  const request = axios.post(baseUrl, noteObject)
  return request.then(response => response.data)
}

const update = (id, changedNote) => {
  // return axios.put(`${baseUrl}/${id}`, changedNote)
  const request = axios.put(`${baseUrl}/${id}`, changedNote)
  return request
    .then(response => response.data)
    // .catch(err =>console.log('server error catched!', err))
  

}

export default { getAll, create, update }