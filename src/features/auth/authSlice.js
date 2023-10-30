/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: null,
        role: null,
        accessToken: null,
        refreshToken: null
    },
    reducers: {
        saveCredentials: (state, action) => {
            const { username, role, accessToken, refreshToken } = action.payload
            state.username = username
            state.role = role
            state.accessToken = accessToken
            state.refreshToken = refreshToken
        },
        cancelCredentials: (state, action) => {
            state.username = null
            state.role = null
            state.accessToken = null
            state.refreshToken = null
        }
    },
})

export const { saveCredentials, cancelCredentials } = authSlice.actions;

export default authSlice.reducer;

export const currentUser = (state) => state.persistedReducer.auth.username;
/*
export const currentUser = (state) => state.auth.username;
export const currentRole = (state) => state.auth.role;
export const currentAccess = (state) => state.auth.accessToken;
export const currentRefreshToken = (state) => state.auth.refreshToken;
*/