import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
	return (
		<figure aria-label="Loading">
			<FontAwesomeIcon icon={faSpinner} size="xs" />
		</figure>
	)
};

export default Loading;