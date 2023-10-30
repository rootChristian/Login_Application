/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
import { rootApi } from "../api/rootApi";

export const userApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        // Endpoint to get users
        getUsers: builder.query({
            query: () => ({
                url: "/users",
                method: "GET",
            }),
        }),
    }),
})

export const { useGetUsersQuery } = userApi;
