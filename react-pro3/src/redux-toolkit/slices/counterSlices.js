import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        inc: (state)=>{
            state.value++
        },

        dec: (state)=>{
            state.value--
       },

       reset: (state)=>{
        state.value = 0
       },

       special: (state, {payload})=>{
        if(isNaN(payload)){
            alert('herf yazmaq olmaz')
        }else{
            state.value += payload
        }
       }
    }
})
export default counterSlice;