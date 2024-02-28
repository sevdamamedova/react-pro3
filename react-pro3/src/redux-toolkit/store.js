import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlices";
import todosSlices from "./slices/todosSlices";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        todos: todosSlices.reducer,
    }
})

export default store;