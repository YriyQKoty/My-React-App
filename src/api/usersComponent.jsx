import { useGetUsersQuery } from "./test";
import { useParams } from 'react-router-dom';

export const UsersComponent = () => {

    const { data, error, isLoading } = useGetUsersQuery();


    return (<div style={{ marginTop: 150 }}>
        {error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : data ? (
            <ul>
                {data.map((user) => (
                    <li key={user.name}>{user.name}: email: {user.email}</li>
                ))}
            </ul>
        ) : null}
    </div>)
}