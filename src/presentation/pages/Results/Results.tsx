import { useSearchParams } from "react-router-dom";
import { Layout } from "../../components";
import { useSearchCharacterQuery } from "../../hooks/useSearchCharacterQuery";

const Results = () => {
    const [searchParams] = useSearchParams();

    const safeGet = (param: string | null): string | undefined =>
    param && param !== 'undefined' ? param : undefined;

    const name = safeGet(searchParams.get('name'));
    const from = safeGet(searchParams.get('from'));
    const to = safeGet(searchParams.get('to'));

    const filters = {
        name,
        from: from ? Number(from) : undefined,
        to: to ? Number(to) : undefined,
    };

    const { data, isLoading } = useSearchCharacterQuery(filters);

    if (isLoading) return <div>Loading</div>

    return (
        <Layout>
            <p>hola</p>
            {data?.map(element => <p>{element.id}</p>)}
        </Layout>
    );
};

export default Results;