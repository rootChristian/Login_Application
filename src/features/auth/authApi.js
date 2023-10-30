/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
import { clearStorage, currentRefreshToken } from "../api/ApiRequest";
import { rootApi } from "../api/rootApi";
import { saveCredentials } from "./authSlice";

export const authApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        // Endpoint to login
        login: builder.mutation({
            query: ({ username, password }) => ({
                url: '/auth',
                method: 'POST',
                body: { username, password },
            }),
            transformResponse: (response) => {
                const { username, role, accessToken, refreshToken } = response;
                saveCredentials(username, role, accessToken, refreshToken);
                // Set data in local storage
                ///setToken(accessToken, refreshToken);
                return response;
            },
        }),
        // Endpoint to refresh the access token
        refresh: builder.mutation({
            query: (refreshToken) => ({
                url: "/auth/refresh",
                method: "POST",
                body: JSON.stringify({ refreshToken: currentRefreshToken }),
            }),
            transformResponse: (response) => {
                const { username, role, accessToken, refreshToken } = response;
                saveCredentials(username, role, accessToken, refreshToken);
                // Set data in local storage
                ///setToken(accessToken, refreshToken);
                return response;
            },
        }),
        // Endpoint to logout
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "GET",
            }),
            onQueryStarted: () => {
                // Clean the access and refresh token in local storage
                clearStorage();
            },
        }),
    }),
})

export const { useLoginMutation, useRefreshMutation, useLogoutMutation } = authApi;


