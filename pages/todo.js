import axios from "axios";
import cookie from "cookie";
import { Button, Dropdown } from "semantic-ui-react";
import { Component } from "react";
import Navbar from "../components/navbar";
import NoteForm from "../components/noteForm";
import Note from "../components/note";
import sort from "../utils/sort";
import { requiredAuth } from "../utils/auth";

class Todo extends Component {
	state = {
		notePop: false,
		todos: [],
		sortOpen: false,
		dropDownText: "Sort By",
		order: "asc",
		sortCategory: "",
	};

	sortOptions = [
		{
			key: "importance",
			text: "Importance",
		},
		{ key: "category", text: "Category" },
		{ key: "check", text: "Status" },
		{ key: "date", text: "Date" },
	];

	componentDidMount() {
		this.getTodos();
	}

	getTodos = async () => {
		const { data } = await axios.get("http://localhost:3000/api/notes");
		const sortTodos = sort(
			data.notes,
			this.state.sortCategory,
			this.state.order
		);
		this.setState({ todos: sortTodos });
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

	handleSortSelect = (key, text) => {
		const { todos, order } = this.state;
		const sortTodos = sort(todos, key, order);
		this.setState({
			todos: sortTodos,
			sortCategory: key,
			dropDownText: text,
			sortOpen: false,
		});
	};

	handleChangeOrder = (order) => {
		const { todos, sortCategory } = this.state;
		const sortTodos = sort(todos, sortCategory, order);
		this.setState({
			todos: sortTodos,
			order: order,
		});
	};

	render() {
		const { todos, sortOpen, dropDownText, notePop } = this.state;
		console.log(this.props.user);
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
						onBlur={() => {
							this.setState({ sortOpen: false });
						}}
					>
						<Dropdown.Menu>
							{this.sortOptions.map(({ key, text }) => (
								<Dropdown.Item
									key={key}
									onClick={() => this.handleSortSelect(key, text)}
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
						onClick={() => this.handleChangeOrder("asc")}
					/>
					<Button
						circular
						icon="triangle down"
						size="medium"
						className="todo-controls"
						onClick={() => this.handleChangeOrder("desc")}
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

export function getServerSideProps(context) {
	const user = requiredAuth(context);
	return { props: { user: user } };
}

export default Todo;
