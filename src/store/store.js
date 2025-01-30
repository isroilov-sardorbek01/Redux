import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "../store/TodoSlicer";

const store = configureStore({
    reducer: {
        todo: ToDoReducer,
    },
});
export default store;
