import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faBriefcase,
	faEllipsisH,
	faBook,
} from "@fortawesome/free-solid-svg-icons";
const TimelineCardRight = ({
	title,
	date,
	description,
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
						? "timeline-card-right timeline-card-complete"
						: "timeline-card-right"
				}
			>
				<div className={"timeline-card-header card-right"}>{title}</div>
				<div className="timeline-card-description">{description}</div>
				<div className="timeline-button-right">
					<FontAwesomeIcon icon={categoryLabel} size="lg" />
				</div>
				{date && (
					<div className={allComplete ? "time time-complete" : "time"}>
						<h4>{date}</h4>
					</div>
				)}
			</div>
		</>
	);
};

export default TimelineCardRight;
