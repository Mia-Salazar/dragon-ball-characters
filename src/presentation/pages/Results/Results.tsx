import { useSearchParams } from "react-router-dom";

import { Item, Layout } from "../../components";
import { useCharacterFilter } from "../../hooks/useCharacterFiltered";

import "./Results.css"

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
            <ul className="list">
                {data?.map(({id, image, ki, name, description}) => <Item key={id} name={name} image={image} ki={ki} description={description} />)}
            </ul>
        </Layout>
    );
};

export default Results;