import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        add: (state, action) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((i) => i.id !== action.payload);
        },
    },
});

export default userSlice.reducer;
export const { add, removeUser } = userSlice.actions;
