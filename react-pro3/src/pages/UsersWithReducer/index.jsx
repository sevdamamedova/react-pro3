import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import PageContainer from '../../components/PageContainer'
import { reducer_X } from './user_reducer'
import Button from '../../components/Button'

const _url = 'https://jsonplaceholder.typicode.com/users'

// const reducer_X = (state = [], action) =>{
//     console.log('state',  state)
//     console.log('action', action)
//     switch(action.type){
//         case'GET_USERS':
//            return action.payload;
//         case'DELETE_USER':
//         const areYouSure = confirm('silmeye eminsiz?')
//         if(areYouSure){
//             const  newState = state.filter(({id}) => id !== action.payload)
//             return newState;
//         }else{
//             alert('Zarafat eleme:)')
//             return state;
//         }
//         case'ADD_USER':
//         const username = prompt('enter new username');
//         const email = prompt('enter new email')
//         const id = v4()
//         // return [...state, {id, username, email}]
//         return state.concat({id, username, email})
//         default:
//             return []
        
//     }
    
// }
const UsersWithReducer = () => {
    
    const [users, dispatch] = useReducer(reducer_X, [])
    useEffect(() =>{
        axios.get(_url).then(({data}) => {
            const action = {type:'GET_USERS', payload: data}
        dispatch(action)
        })
    
        
    },[])
  return (
    <PageContainer>
        <Button onClick={() => dispatch({type: 'ADD_USER'})}
        title='add user'/>
        <Button onClick={() => dispatch({type: 'RM_LAST_USER'})}
        title='remove last user'/>
        {
            users.map(({id, username, email}) =>{
                return(
                    <div key={id}>
                    <h1>{id}.{username}-{email} 
                    <button onClick={() => dispatch({type: 'DELETE_USER', payload: id})}>X</button></h1>
                    
                    </div>
                )
            })
        }
    </PageContainer>
  )
}

export default UsersWithReducer 