import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todosSlices from '../../redux-toolkit/slices/todosSlices'
import style from './style.module.css'


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
    <div className={style.todosContainer}>
    {
        todos.map((todo) => {
            return(
                <div 
                onClick={() => dispatch(actions.toggleDone(todo.id))}
                style={{backgroundColor: todo.completed ? 'darkgreen' : 'darkred'}} 
                className={style.todo} key={todo.id}>
                    <p>{todo.todo}</p>
                    <button>{todo.completed ? 'chek' : 'X'}</button>
                </div>
            )
        })
    }
    </div>
    </>
  )
}

export default ToDos