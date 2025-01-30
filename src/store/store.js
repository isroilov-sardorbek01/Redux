import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "../store/TodoSlicer";
import UserReducer from "../store/userSlice";

const store = configureStore({
    reducer: {
        todo: ToDoReducer,
        users: UserReducer,
    },
});
export default store;
