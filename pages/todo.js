import Navbar from "../components/navbar";
import { Button } from "semantic-ui-react";
import { Component } from "react";
import NoteForm from "../components/noteForm";
import Note from "../components/note";
import axios from "axios";

class Todo extends Component {
	state = {
		notePop: false,
		todos: [],
	};

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
		this.setState({ notePop });
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
		const { todos } = this.state;
		return (
			<div>
				<Navbar />
				<div className="create-button-container">
					<Button
						circular
						icon="plus"
						size="large"
						className="create"
						onClick={this.handleOpenNote}
					/>
				</div>
				<div className="notes">
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
				</div>
				<div
					className={
						this.state.notePop
							? "note-popup-background"
							: "note-popup-background noteHide"
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
