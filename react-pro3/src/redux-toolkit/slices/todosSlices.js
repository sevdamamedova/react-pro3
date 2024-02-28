import { createSlice } from "@reduxjs/toolkit";

const todosSlices = createSlice({
    name: 'todos',
    initialState: {
        value: []
    },

    reducers: {
        getTodos: (store, {payload}) => {
           store.value = payload
        },
    toggleDone: (store, {payload}) => {
        store.value = store.value.map((todo) => {
            if(todo.id === payload){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })
    }   
    }
})

export default todosSlices;