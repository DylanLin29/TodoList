import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faBriefcase,
	faEllipsisH,
	faBook,
} from "@fortawesome/free-solid-svg-icons";
const TimelineCardLeft = ({
	description,
	title,
	date,
	category,
	check,
	allComplete,
}) => {
	let categoryLabel = faEllipsisH;
	switch (category) {
		case "Home":
			categoryLabel = faHome;
			break;
		case "Work":
			categoryLabel = faBriefcase;
			break;
		case "School":
			categoryLabel = faBook;
			break;
		default:
			categoryLabel = faEllipsisH;
			break;
	}
	return (
		<>
			<div
				className={
					check
						? "timeline-card-left timeline-card-complete"
						: "timeline-card-left"
				}
			>
				<div className="timeline-card-header card-left">
					<p>{title}</p>
				</div>
				<div className="timeline-card-description">{description}</div>
				<div className="timeline-button-left">
					<FontAwesomeIcon icon={categoryLabel} size="lg" />
				</div>
				{date && (
					<div className={allComplete ? "time time-complete" : "time"}>
						<p>{date}</p>
					</div>
				)}
			</div>
		</>
	);
};

export default TimelineCardLeft;
