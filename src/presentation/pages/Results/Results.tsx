import { useSearchParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Item, Layout } from "../../components";
import { useCharacterFilter } from "../../hooks/useCharacterFiltered";

import "./Results.css"

const Loading = () => {
    return (
        <figure aria-hidden="true">
            <FontAwesomeIcon icon={faSpinner} size="xs" />
        </figure>
    )
}

const Results = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name') || "";
    const from = Number(searchParams.get('from'));
    const to = Number(searchParams.get('to'));

    const { data, isLoading } = useCharacterFilter(from, to, name)
    return (
        <Layout>
            <h2>{data?.length} results found:</h2>

            <div aria-busy={isLoading ? true : false} aria-live="polite">
                {isLoading ? <Loading /> :
                    (
                        <ul className="list">
                            {data?.map(({id, image, ki, name, description}) => <Item key={id} name={name} image={image} ki={ki} description={description} />)}
                        </ul>
                    )
                }
            </div>
        </Layout>
    );
};

export default Results;