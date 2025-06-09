import { useSearchParams } from "react-router-dom";

import { Layout } from "../../components";
import { useCharacterFilter } from "../../hooks/useCharacterFiltered";

const Results = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name') || "";
    const from = Number(searchParams.get('from'));
    const to = Number(searchParams.get('to'));

    const { data, isLoading } = useCharacterFilter(from, to, name)

    if (isLoading) return <div>Loading</div>

    console.log(data, 'data')

    return (
        <Layout>
            <h2>{data?.length} results found:</h2>
            {data?.map(element => <p>{element.id}</p>)}
        </Layout>
    );
};

export default Results;