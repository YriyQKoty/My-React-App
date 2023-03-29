import { useGetUserByIdQuery } from "./test";
import { useParams } from 'react-router-dom';

export const UserComponent = () => {
    const { id } = useParams();

    const { data, error, isLoading } = useGetUserByIdQuery(id)


    return(<div style={{ marginTop: 150 }}>
        {error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : data ? (
            <>
                <h3>{data.name}</h3>
                <p>{data.email}</p>
            </>
        ) : null}
    </div>)
}