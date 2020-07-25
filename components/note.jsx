import { Button } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrash,
	faClipboardCheck,
	faSpinner,
	faCheck,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
	const [arrowClick, setArrowClick] = useState(false);
	let arrowClass = "";
	check && (arrowClass = "card-arrow-complete");
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
				<p className="card-date">{date}</p>
				{/* <Button primary className="flip-button">
					Flip
				</Button> */}
				<p
					className={
						arrowClick
							? "card-date card-description-show"
							: "card-date card-description-hide"
					}
				>
					{description}
				</p>
				{arrowClick ? (
					<FontAwesomeIcon
						icon={faChevronUp}
						size="2x"
						onClick={() => setArrowClick(!arrowClick)}
						className={
							arrowClick ? `${arrowClass} description-open` : `${arrowClass}`
						}
					/>
				) : (
					<FontAwesomeIcon
						icon={faChevronDown}
						size="2x"
						onClick={() => setArrowClick(!arrowClick)}
						className={
							!arrowClick ? `${arrowClass} description-close` : `${arrowClass}`
						}
					/>
				)}
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
