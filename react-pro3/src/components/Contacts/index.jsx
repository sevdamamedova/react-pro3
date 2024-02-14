import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { useParams } from 'react-router'
import PageContainer from '../PageContainer'
const _url = 'https://65c46cc2dae2304e92e2935c.mockapi.io/posts'

const getContacts = async (_setContacts) => {
  const {data} = await axios.get(_url)
  _setContacts(data)
}

const Contacts = () => {
    const [contacts, setContacts] = useState([])
    const [name, setName] = useState('')
    useEffect(() => {
        getContacts(setContacts)
    },[])

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post(_url, {name}).then(() => {
          setName('')
          getContacts(setContacts)
        })
        console.log(name)
    }
    
    const onEdit = (id) =>{
      let newName = prompt('Enter new name')
      axios.put(`${_url}/${id}`, {name: newName}).then(() =>{
        getContacts(setContacts)
      })

    }
    const onDelete = (id) =>{
      axios.delete(`${_url}/${id}`).then(() =>{
        getContacts(setContacts)
      })
    }
  return (
    <PageContainer>
    <Outlet/>
    <form onSubmit={onSubmit}>
       <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
       <button>add contact</button>
    </form>
    {
      contacts.map(({id, name}) => {
        return <React.Fragment key={id}>
            <p>{name}</p>
            <hr />
            <div>
                        <button onClick={() => onEdit(id)}>pen</button>
                        <button onClick={() => onDelete(id)}>close</button>
                        </div>
        </React.Fragment>

      })  
    }
    
    </PageContainer>
  )
}
export function SingleContact(){
    const {id} = useParams()
    return(
      <div> 
        <h1>contacts with id {id} </h1>
      </div>
      
    )
    }


export default Contacts

