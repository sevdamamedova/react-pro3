import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import PageContainer from '../../components/PageContainer'
import Button from '../../components/Button'
import { connect } from 'react-redux'

const _url = 'https://jsonplaceholder.typicode.com/users'


const UsersWithRedux = ({users, dispatch}) => {
    useEffect(() =>{
        axios.get(_url).then(({data}) => {
            const action = {type: 'get_users', payload: data}
        dispatch(action)
        })
    
        
    },[])
  return (
    <PageContainer>
        <Button onClick={() => dispatch({type: USER_ACTION.ADD_USER})}
        title='add user'/>
        <Button onClick={() => dispatch({type: USER_ACTION.RM_MID_USER})}
        title='remove middle user'/>
        <Button onClick={() => dispatch({type: USER_ACTION.RM_LAST_USER})}
        title='remove last user'/>
        {
            users.map(({id, username, email}) =>{
                return(
                    <div key={id}>
                    <h1>{id}.{username}-{email} 
                    <button onClick={() => dispatch({type: USER_ACTION.DELETE_USER, payload: id})}>X</button></h1>
                    
                    </div>
                )
            })
        }
    </PageContainer>
  )
}

const mapStoreToProps = (store) => store;
export default connect(mapStoreToProps)(UsersWithRedux)