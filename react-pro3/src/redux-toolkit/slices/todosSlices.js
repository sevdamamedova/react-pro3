import { createSlice } from "@reduxjs/toolkit";

const todosSlices = createSlice({
    name: 'todos',
    initialState: {
        value: []
    },

    reducers: {
        getTodos: (store, {payload}) => {
           store.value = payload
        }
    }
})

export default todosSlices;