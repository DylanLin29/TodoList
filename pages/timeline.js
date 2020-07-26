import Navbar from "../components/navbar";
import TimelineCardLeft from "../components/common/timelineCardLeft";
import TimelineCardRight from "../components/common/timelineCardRight";

const Timeline = () => {
	return (
		<>
			<Navbar />
			<div className="timeline">
				<div className="timeline-cards">
					<TimelineCardLeft direction="card-left" />
					<TimelineCardRight direction="card-right" />
					<TimelineCardLeft direction="card-left" />
					<TimelineCardRight direction="card-right" />
				</div>
			</div>
		</>
	);

	// <ul>
	// 	<li>
	// 		<div className="content">
	// 			<h3>Title</h3>
	// 			<p className="content">
	// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
	// 				a felis quis enim maximus varius. Morbi consequat luctus odio id
	// 				commodo. Vestibulum ante ipsum primis in faucibus orci luctus et
	// 				ultrices posuere cubilia curae; Donec in velit auctor, lobortis
	// 				ante a, pellentesque sapien. Morbi sem odio, consectetur quis
	// 				faucibus accumsan, porta eget lacus. Integer vel mi erat.
	// 				Quisque egestas, dolor nec elementum rhoncus, erat libero luctus
	// 				elit, vitae posuere eros urna nec orci. Curabitur porttitor
	// 				justo at magna pellentesque maximus.
	// 			</p>
	// 		</div>
	// 		<div className="time">
	// 			<h4>Date</h4>
	// 		</div>
	// 	</li>
	// 	<li>
	// 		<div className="content">
	// 			<h3>Title</h3>
	// 			<p className="content">
	// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
	// 				a felis quis enim maximus varius. Morbi consequat luctus odio id
	// 				commodo. Vestibulum ante ipsum primis in faucibus orci luctus et
	// 				ultrices posuere cubilia curae; Donec in velit auctor, lobortis
	// 				ante a, pellentesque sapien. Morbi sem odio, consectetur quis
	// 				faucibus accumsan, porta eget lacus. Integer vel mi erat.
	// 				Quisque egestas, dolor nec elementum rhoncus, erat libero luctus
	// 				elit, vitae posuere eros urna nec orci. Curabitur porttitor
	// 				justo at magna pellentesque maximus.
	// 			</p>
	// 		</div>
	// 		<div className="time">
	// 			<h4>Date</h4>
	// 		</div>
	// 	</li>
	// 	<li>
	// 		<div className="content">
	// 			<h3>Title</h3>
	// 			<p className="content">
	// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
	// 				a felis quis enim maximus varius. Morbi consequat luctus odio id
	// 				commodo. Vestibulum ante ipsum primis in faucibus orci luctus et
	// 				ultrices posuere cubilia curae; Donec in velit auctor, lobortis
	// 				ante a, pellentesque sapien. Morbi sem odio, consectetur quis
	// 				faucibus accumsan, porta eget lacus. Integer vel mi erat.
	// 				Quisque egestas, dolor nec elementum rhoncus, erat libero luctus
	// 				elit, vitae posuere eros urna nec orci. Curabitur porttitor
	// 				justo at magna pellentesque maximus.
	// 			</p>
	// 		</div>
	// 		<div className="time">
	// 			<h4>Date</h4>
	// 		</div>
	// 	</li>
	// 	<li>
	// 		<div className="content">
	// 			<h3>Title</h3>
	// 			<p className="content">
	// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
	// 				a felis quis enim maximus varius. Morbi consequat luctus odio id
	// 				commodo. Vestibulum ante ipsum primis in faucibus orci luctus et
	// 				ultrices posuere cubilia curae; Donec in velit auctor, lobortis
	// 				ante a, pellentesque sapien. Morbi sem odio, consectetur quis
	// 				faucibus accumsan, porta eget lacus. Integer vel mi erat.
	// 				Quisque egestas, dolor nec elementum rhoncus, erat libero luctus
	// 				elit, vitae posuere eros urna nec orci. Curabitur porttitor
	// 				justo at magna pellentesque maximus.
	// 			</p>
	// 		</div>
	// 		<div className="time">
	// 			<h4>Date</h4>
	// 		</div>
	// 	</li>
	// 	<div style={{ clear: "both" }} />
	// </ul>
};

export default Timeline;
