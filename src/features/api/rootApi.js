/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, clearStorage, reauthenticate } from "./ApiRequest";
import { saveCredentials } from "../auth/authSlice";

// Initial fetchBaseQuery and set the headers with access token
const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    withCredentials: true,
    //credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        ///const accessToken = getAccessToken();
        const accessToken = getState().persistedReducer.auth.accessToken;
        if (accessToken) {
            headers.set('authorization', `Bearer ${accessToken}`);
        }
        return headers;
    },
});

// Function that we use to refresh the access token using the refresh token
const baseQueryWithReAuth = async (args, api, extraOptions) => {
    try {
        const response = await baseQuery(args, api, extraOptions);
        if (response?.error?.status === 401 || response?.error?.status === 403) {
            console.log("\nSending refresh token!\n");
            ///const refreshToken = getRefreshToken();
            const refreshToken = JSON.stringify(api.getState().persistedReducer.auth.refreshToken);
            // Automatic re-authentication
            const result = await reauthenticate(refreshToken);
            // Update the token in local storage
            ///setToken(result.accessToken, result.refreshToken);
            // store the new token 
            /*const { username, role, accessToken, refreshToken } = result;
                saveCredentials(username, role, accessToken, refreshToken);*/
            api.dispatch(saveCredentials({ ...result }))
            // Set the headers with the new access token
            const headers = {
                Authorization: `Bearer ${result.accessToken}`,
            };
            // Repeat the initial request with the new access token
            const retryResponse = await baseQuery(args, api, {
                ...extraOptions,
                ...headers,
            });
            return retryResponse;
        }
        return response;
    } catch (err) {
        // Clear the token on local storage
        clearStorage();
        // When something go wrong, redirect to the login page
        window.location.href = "/login";
        throw new Error('Something wrong: ', err);
    }
};

export const rootApi = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({})
});
