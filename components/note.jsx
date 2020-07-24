import { Button } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrash,
	faClipboardCheck,
	faSpinner,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Note = ({
	title,
	description,
	importance,
	category,
	_id,
	handleDelete,
	handleComplete,
	check,
	date,
}) => {
	return (
		<div className="card-wrapper">
			<div className="card">
				<div className={check ? "card-img card-complete" : "card-img"} />
				<img src={`images/${category}.png`} className="profile-img" />
				<p
					className={
						check
							? "card-importance card-importance-complete"
							: "card-importance"
					}
				>
					{importance}
				</p>
				{check && (
					<FontAwesomeIcon className="card-check" icon={faCheck} size="2x" />
				)}
				<h1>{title}</h1>
				{/* <p className="card-date">Date</p> */}
				<p className="card-date">{date}</p>
				<Button primary className="flip-button">
					Flip
				</Button>
				<ul className="card-options">
					<li onClick={() => handleDelete(_id)}>
						<FontAwesomeIcon icon={faTrash} size="lg" />
					</li>
					<li onClick={() => handleComplete(_id, true)}>
						<FontAwesomeIcon icon={faClipboardCheck} size="lg" />
					</li>
					<li onClick={() => handleComplete(_id, false)}>
						<FontAwesomeIcon icon={faSpinner} size="lg" />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Note;
