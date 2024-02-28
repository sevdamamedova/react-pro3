import axios from 'axios'
import React, { useEffect } from 'react'

const url = 'https://dummyjson.com/todos'
const ToDos = () => {

    useEffect(() => {
        axios.get(url).then(({data}) => {
            console.log(data.todos)
        } )
    },[])
    
  return (
    <>
    <h1>Welcome to todo page </h1>
    </>
  )
}

export default ToDos