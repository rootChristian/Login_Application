/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: { users: [] },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        removeUser: (state, action) => {
            state.users.splice(action.payload)
        },
    },
})

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;