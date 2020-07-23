import Joi from "joi-browser";
import axios from "axios";
import Form from "../components/common/form";
import { Button, Select } from "semantic-ui-react";

class NoteForm extends Form {
	state = {
		data: {
			title: "",
			description: "",
			importance: 3,
			category: "Uncategorized",
			createDate: 0,
			check: false,
		},
		errors: {},
		selectImportance: {
			1: false,
			2: false,
			3: false,
		},
	};

	schema = {
		title: Joi.string().required().label("Title"),
		description: Joi.string().required().label("Description"),
		importance: Joi.number().optional(),
	};

	handleCancel = () => {
		const selectImportance = {
			1: false,
			2: false,
			3: false,
		};
		const data = {
			title: "",
			description: "",
			importance: 3,
			category: "Uncategorized",
			createDate: 0,
			check: false,
		};
		this.setState({ errors: {}, selectImportance, data });
		this.props.handleOpenNote();
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleCreate(this.state.data);
		this.handleCancel();
	};

	handleClickImportance = (index) => {
		const updateSelectImportance = {
			...this.state.selectImportance,
		};
		const updateData = { ...this.state.data };
		updateData.importance = index;
		for (let i = 1; i <= 3; i++) {
			updateSelectImportance[i] = false;
		}
		updateSelectImportance[index] = true;
		this.setState({
			selectImportance: updateSelectImportance,
			data: updateData,
		});
	};

	handleSelect = (event, option) => {
		const data = this.state.data;
		data.category = option.value;
		this.setState({ data });
	};

	render() {
		const importanceLevel = [1, 2, 3];
		const categoryOptions = [
			{ key: "Home", value: "Home", text: "Home" },
			{ key: "School", value: "School", text: "School" },
			{ key: "Work", value: "Work", text: "Work" },
		];
		return (
			<form onSubmit={this.handleSubmit}>
				<p className="note-title">Todo</p>
				<hr />
				{this.renderInput("title", "Title", "login-label")}
				{this.renderInput("description", "Description", "login-label")}
				<p className="form-label">Importance Level</p>
				<Button.Group className="importance-buttons-group">
					{importanceLevel.map((index) => {
						return (
							<Button
								onClick={() =>
									this.handleClickImportance(index)
								}
								key={index}
								type="button"
								className={
									this.state.selectImportance[index]
										? "importance-button-select"
										: "importance-button"
								}
							>
								{index}
							</Button>
						);
					})}
				</Button.Group>
				<p className="form-label">Category</p>
				<Select
					options={categoryOptions}
					onChange={this.handleSelect}
					className="note-select"
					placeholder="Select a Category"
				/>
				<br />
				<Button
					color="red"
					onClick={this.handleCancel}
					className="note-button"
					type="button"
				>
					Cancel
				</Button>
				<Button color="blue" className="note-button">
					Create
				</Button>
			</form>
		);
	}
}

export default NoteForm;
