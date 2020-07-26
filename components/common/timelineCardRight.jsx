import { Button } from "semantic-ui-react";
const TimelineCardRight = () => {
	return (
		<>
			<div className="timeline-card-right">
				<div className="timeline-card-header card-right">Lorem ipsum dolor</div>
				<div className="timeline-card-description ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra
					diam consectetur ullamcorper consequat. Etiam et lorem commodo,
					porttitor diam a, semper nulla. Maecenas in turpis tempor, tempor
					lorem et, porta nunc. Donec ullamcorper dolor odio, id pellentesque
					tortor facilisis at. Aenean consequat velit vitae tellus aliquam, nec
					consequat diam.
				</div>
				<Button
					circular
					className="timeline-button-right"
					icon="home"
					size="medium"
				/>
				<div className="time">
					<h3>Date</h3>
				</div>
			</div>
		</>
	);
};

export default TimelineCardRight;
