import Navbar from "../components/navbar";
import { Button, Dropdown } from "semantic-ui-react";
import { Component } from "react";
import NoteForm from "../components/noteForm";
import Note from "../components/note";
import axios from "axios";

class Todo extends Component {
	state = {
		notePop: false,
		todos: [],
		sortOpen: false,
		dropDownText: "Sort By",
	};

	sortOptions = [
		{
			key: "importance",
			text: "Importance",
		},
		{ key: "category", text: "Category" },
		{ key: "status", text: "Status" },
		{ key: "date", text: "Date" },
	];

	componentDidMount() {
		this.getTodos();
	}

	getTodos = async () => {
		const { data } = await axios.get("http://localhost:3000/api/notes");
		console.log(data);
		this.setState({ todos: data.notes });
	};

	handleOpenNote = () => {
		const notePop = !this.state.notePop;
		this.setState({ notePop, sortOpen: false });
	};

	handleCreate = async (data) => {
		const notePop = !this.state.notePop;
		try {
			await axios.post("http://localhost:3000/api/notes", data);
			this.getTodos();
		} catch (error) {
			console.log(error);
		}
		this.setState({ notePop });
	};

	handleDelete = async (_id) => {
		try {
			await axios.delete("http://localhost:3000/api/notes", {
				data: _id,
			});
			this.getTodos();
		} catch (error) {
			console.log(error);
		}
	};

	handleComplete = async (_id, status) => {
		try {
			await axios.put("http://localhost:3000/api/notes", {
				id: _id,
				status: status,
			});
			this.getTodos();
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { todos, sortOpen, dropDownText, notePop } = this.state;
		return (
			<div>
				<Navbar />
				<div
					className={
						sortOpen
							? "create-button-container sortOpen"
							: "create-button-container"
					}
				>
					<Button
						circular
						icon="plus"
						size="large"
						className="create"
						onClick={this.handleOpenNote}
					/>
					<span></span>
					<Dropdown
						text={dropDownText}
						floating
						labeled
						button
						className="todo-sort-dropdown icon"
						onClick={() => {
							this.setState({ sortOpen: !sortOpen });
						}}
					>
						<Dropdown.Menu>
							{this.sortOptions.map(({ key, text }) => (
								<Dropdown.Item
									key={key}
									onClick={() =>
										this.setState({ dropDownText: text, sortOpen: false })
									}
								>
									{text}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Button
						circular
						icon="triangle up"
						size="medium"
						className="todo-controls"
					/>
					<Button
						circular
						icon="triangle down"
						size="medium"
						className="todo-controls"
					/>
				</div>
				<div className="card-wrapper">
					{todos.map(
						(
							{ title, description, importance, category, _id, check, date },
							index
						) => {
							return (
								<Note
									title={title}
									description={description}
									importance={importance}
									category={category}
									_id={_id}
									key={index}
									check={check}
									handleDelete={this.handleDelete}
									handleComplete={this.handleComplete}
									date={date}
								/>
							);
						}
					)}
				</div>
				<div
					className={
						notePop ? "note-popup-background" : "note-popup-background noteHide"
					}
				>
					<div className="note">
						<NoteForm
							handleCreate={this.handleCreate}
							handleOpenNote={this.handleOpenNote}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Todo;
