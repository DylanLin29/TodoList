import Navbar from "../components/navbar";
import TimelineCardLeft from "../components/common/timelineCardLeft";
import TimelineCardRight from "../components/common/timelineCardRight";
import { Component } from "react";
const links = require("../config/links");
import axios from "axios";
import _ from "lodash";

class Timeline extends Component {
	state = {
		groupTodos: [],
	};
	async componentDidMount() {
		const { data } = await axios.get(links.notes);
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
				<Navbar authenticated={true} currentPage="timeline" />
				<div className="timeline">
					{groupTodos.map(({ date, todos }) => {
						let currentDate = "";
						let allComplete = todos.map(({ check }) => check);
						allComplete = allComplete.every(Boolean);
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
