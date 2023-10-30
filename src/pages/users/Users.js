/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../../features/users/userApi";

const Users = () => {
    const { data: users, isError, isLoading } = useGetUsersQuery() || {};
    const userInfo = useSelector((state: RootState) => state.persistedReducer.auth);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>An error occurred: {isError.message}</div>;
    }

    return (
        <div>
            {
                users.length > 0 && users?.map((user) => {
                    //console.log("\nDATA USER\n:", user);
                    return <p key={user.id}>USERNAME: {user.username}    EMAIL:{user.email}    ROLE:{user.role}</p>
                })
            }
        </div>
    );
};

export default Users;
