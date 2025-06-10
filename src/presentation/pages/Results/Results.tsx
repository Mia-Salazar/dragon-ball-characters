import { useSearchParams } from "react-router-dom";

import { Item, Layout, Loading } from "../../components";
import { useCharacterFilter } from "../../hooks/useCharacterFiltered";

import "./Results.css"

const Results = () => {
	const [searchParams] = useSearchParams();
	const name = searchParams.get('name') || "";
	const from = searchParams.get('from');
	const to = searchParams.get('to');

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