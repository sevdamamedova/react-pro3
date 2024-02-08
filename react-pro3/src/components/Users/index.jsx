import { useEffect, useState } from "react"
import axios from "axios"

const _url = 'https://jsonplaceholder.typicode.com/users'
const Users = ({}) => {
  const [users, setUsers] = useState([])
  
  useEffect(() =>{
    axios.get(_url).then(({ data }) =>{
      setUsers(data)
    })
},[])
  return (
    <div>
      <h1>Users sehifesi</h1>
      {
        users.map((user) => {
         return <div key = {user.id}>
          <h1>{user.username}</h1>
          <hr />
          </div>

        })
      }
    </div>
  )
}

export default Users