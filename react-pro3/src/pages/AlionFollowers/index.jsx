import React, { useEffect, useReducer } from 'react'
import PageContainer from '../../components/PageContainer'
import alion_follower_reducer, { _action, initialStore } from './reducer'

const style = {display: 'flex', gap: 10, alignItems: 'center'}
const omgStyle = {width: 100, heigth: 100, objectFit: 'cover'}

const AlionFollowers = () => {
    const [store, dispatch] = useReducer(alion_follower_reducer, initialStore)
    
    useEffect(() =>{
        (async () =>{
            const data = await getFollowers()
            dispatch({type: _action.get_followers, payload: data})
        })()      
    },[])

  return (
    <PageContainer>
            <h1> Wellocome to Alion's Followers pages</h1>
            <button onClick={() => dispatch({type: _action.RM_first_with_a})}>remove first follover with a/A</button>
            {
                store.followers.map((fol) =>{
                    return(
                        <div key={fol.id}>
                            <h1 style={style}>{fol.login} <button onClick={() => dispatch({type:_action.get_followers, payload: fol.id})}>X</button></h1>
                            <button onClick={() => dispatch({type: _action.RM_last_follower})}>Remove Last Followers</button>
                            <img style={omgStyle} src={fol.avatar_url}  alt={`${fol.login}'s image`}/>
                        </div>
                    )
                })
            }
    </PageContainer>
  )
}

export default AlionFollowers;