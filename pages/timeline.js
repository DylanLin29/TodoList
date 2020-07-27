import Navbar from "../components/navbar";
import TimelineCardLeft from "../components/common/timelineCardLeft";
import TimelineCardRight from "../components/common/timelineCardRight";
import { Component } from "react";
import axios from "axios";
import _ from "lodash";

class Timeline extends Component {
	state = {
		groupTodos: [],
	};
	async componentDidMount() {
		const { data } = await axios.get("http://localhost:3000/api/notes");
		const groupNotes = _.chain(data.notes)
			.groupBy("date")
			.map((value, key) => ({ date: key, todos: value }))
			.orderBy("date")
			.value();
		this.setState({ groupTodos: groupNotes });
	}
	render() {
		const { groupTodos } = this.state;
		let direction = "right";
		return (
			<>
				<Navbar />
				<div className="timeline">
					{groupTodos.map(({ date, todos }) => {
						let currentDate = "";
						let allComplete = todos.map(({ check }) => check);
						allComplete = allComplete.every(Boolean);
						console.log(allComplete);
						direction === "left" ? (direction = "right") : (direction = "left");
						return todos.map(
							({ title, description, category, check }, index) => {
								if (!index) {
									currentDate = date;
								} else {
									currentDate = "";
								}
								if (direction === "left") {
									return (
										<TimelineCardLeft
											title={title}
											description={description}
											category={category}
											date={currentDate}
											check={check}
											allComplete={allComplete}
										/>
									);
								} else {
									return (
										<TimelineCardRight
											title={title}
											description={description}
											category={category}
											date={currentDate}
											check={check}
											allComplete={allComplete}
										/>
									);
								}
							}
						);
					})}
				</div>
			</>
		);
	}
}

export default Timeline;
