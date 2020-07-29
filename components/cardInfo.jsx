import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faCheck,
	faChevronDown,
	faSpinner,
	faTrash,
	faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Note from "./note";
import TimelineCardLeft from "./common/timelineCardLeft";
import TimelineCardRight from "./common/timelineCardRight";
import { useState } from "react";

const CardInfo = () => {
	const [check, setCheck] = useState(false);
	const [deleteNote, setDeleteNote] = useState(false);
	const handleComplete = (id, status) => {
		setCheck(status);
	};

	const handleDelete = () => {
		setDeleteNote(true);
	};

	return (
		<div className="card-info">
			<div className={deleteNote ? "card-info-delete" : ""}>
				<Note
					title="Grocery"
					description="Buy some fruits"
					importance={1}
					category="Home"
					date="07-28-2020"
					check={check}
					handleComplete={handleComplete}
					handleDelete={handleDelete}
				/>
			</div>
			<div className="card-info-details">
				<div className="card-info-home">
					<FontAwesomeIcon icon={faHome} size="3x" />
					<span>Represents the category of this todo item</span>
				</div>
				<div className="card-info-importance">
					<span>1</span>
					<span>Indicates the level of importance</span>
				</div>
				<div className="card-info-check">
					<FontAwesomeIcon icon={faCheck} size="2x" />
					<span>Indicates this todo item is completed</span>
				</div>
				<div className="card-info-description">
					<FontAwesomeIcon icon={faChevronDown} size="2x" />
					<span>Displays the description</span>
				</div>
				<div className="card-info-trash">
					<FontAwesomeIcon icon={faTrash} size="2x" />
					<span>Deletes this todo item</span>
				</div>
				<div className="card-info-complete">
					<FontAwesomeIcon icon={faClipboardCheck} size="2x" />
					<span>Marks this todo item as complete</span>
				</div>
				<div className="card-info-incomplate">
					<FontAwesomeIcon icon={faSpinner} size="2x" />
					<span>Marks this todo item as incomplete</span>
				</div>
			</div>
			{/* <div className="card-info-timeline">
				<TimelineCardLeft
					description="Buy some fruits"
					date="07-28-2020"
					title="Grocery"
					category="Home"
					check={false}
				/>
			</div> */}
		</div>
	);
};

export default CardInfo;
