import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todosSlices from '../../redux-toolkit/slices/todosSlices'


const url = 'https://dummyjson.com/todos'
const ToDos = () => {
    const {actions} = todosSlices
    const todos = useSelector((store) => store.todos.value)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(url).then(({data}) => {
            dispatch(actions.getTodos(data.todos))
        } )
    },[])
    
  return (
    <>
    <h1>Welcome to todo page </h1>
    {
        todos.map((todo) => {
            return(
                <p key={todo.id}>
                    {todo.todo}
                </p>
            )
        })
    }
    </>
  )
}

export default ToDos