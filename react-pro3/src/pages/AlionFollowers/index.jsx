import React, { useEffect, useReducer } from 'react'
import PageContainer from '../../components/PageContainer'
import alion_follower_reducer, { _action, initialStore } from './reducer'

const style = {display: 'flex', gap: '20px', alignItems: 'center'}

const AlionFollowers = () => {
    const [store, dispatch] = useReducer(alion_follower_reducer, initialStore)
    
    useEffect(() =>{
        getFollowers().then((data) =>{
            dispatch({type: _action.get_followers, payload: data})
        })       
    },[])

  return (
    <PageContainer>
            <h1> Wellocome to Alion's Followers pages</h1>
            {
                store.followers.map((fol) =>{
                    return(
                        <div key={fol.id}>
                            <h1 style={style}>{fol.login} <button onClick={() => dispatch({type:_action.get_followers, payload: fol.id})}>X</button></h1>

                        </div>
                    )
                })
            }
    </PageContainer>
  )
}

export default AlionFollowers;