import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: [],
};

const ToDoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtoDo: (state, action) => {
            state.todo.push(action.payload);
        },
        remove: (state, action) => {
            state.todo = state.todo.filter((e) => e.id !== action.payload);
        },
    },
});

export default ToDoSlice.reducer;
export const { addtoDo,remove } = ToDoSlice.actions;
