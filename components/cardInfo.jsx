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
			<table className="card-content">
				<tbody>
					<tr>
						<td>
							<FontAwesomeIcon icon={faHome} />
						</td>
						<td>The category of the created todo item</td>
					</tr>
					<tr>
						<td>1</td>
						<td>The level of importance of the todo item</td>
					</tr>
					<tr>
						<td>
							<FontAwesomeIcon icon={faCheck} size="lg" />
						</td>
						<td>This todo item is completed</td>
					</tr>
					<tr>
						<td>
							<FontAwesomeIcon icon={faChevronDown} size="lg" />
						</td>
						<td>Displays the description</td>
					</tr>
					<tr>
						<td>
							<FontAwesomeIcon icon={faTrash} size="lg" />
						</td>
						<td>Deletes this todo item</td>
					</tr>
					<tr>
						<td>
							<FontAwesomeIcon icon={faClipboardCheck} size="lg" />
						</td>
						<td>Marks this todo item as complete</td>
					</tr>
					<tr>
						<td>
							<FontAwesomeIcon icon={faSpinner} size="lg" />
						</td>
						<td>Marks this todo item as incomplete</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CardInfo;
