import axios from 'axios'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const url = 'https://jsonplaceholder.typicode.com/users'

const Contacts = ({concats, dispatch}) =>{

    useEffect(() =>{
        axios.get(url).then(({data}) =>{
            dispatch({type: 'get_contacts', payload: data})
        })
    },[])
  return (
    <>
    <button onClick={() => dispatch({type: 'add_contact'})}>Add new cantact</button>
     {
        
        concats.map((c) => {
          return(
            <React.Fragment key={c.id}>
               <h1>{c.name}</h1>
           </React.Fragment> 
           ) 
           
        })
        
    }
  </>
  )
}
const mapStoreToProps = (s) => s;
export default connect(mapStoreToProps)(Contacts)