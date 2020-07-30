import Navbar from "../components/navbar";
import TimelineCardLeft from "../components/common/timelineCardLeft";
import TimelineCardRight from "../components/common/timelineCardRight";
import { Component } from "react";
import { Button } from "semantic-ui-react";
const links = require("../config/links");
import axios from "axios";
import _ from "lodash";

class Timeline extends Component {
	state = {
		groupTodos: [],
		today: false,
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
		const { groupTodos, today } = this.state;
		let updatedTodos = groupTodos;
		const now = new Date();
		const date = String(now.getDate()).padStart(2, "0");
		const month = String(now.getMonth() + 1).padStart(2, "0"); //January is 0!
		const year = now.getFullYear();
		const currentDate = `${month}-${date}-${year}`;
		if (today) {
			updatedTodos = _.filter(groupTodos, { date: currentDate });
		}
		let direction = "right";
		return (
			<>
				<Navbar authenticated={true} currentPage="timeline" />
				<div className={"timeline-options-container"}>
					{today ? (
						<>
							<Button
								className="timeline-options"
								onClick={() => this.setState({ today: true })}
								primary
							>
								Today's Timeline
							</Button>
							<Button
								className="timeline-options"
								onClick={() => this.setState({ today: false })}
							>
								Entire Timeline
							</Button>
						</>
					) : (
						<>
							<Button
								className="timeline-options"
								onClick={() => this.setState({ today: true })}
							>
								Today's Timeline
							</Button>
							<Button
								className="timeline-options"
								onClick={() => this.setState({ today: false })}
								primary
							>
								Entire Timeline
							</Button>
						</>
					)}
				</div>
				<div className="timeline">
					{updatedTodos.map(({ date, todos }) => {
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
