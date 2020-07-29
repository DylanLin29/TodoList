import Joi from "joi-browser";
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
			date: "",
			userID: this.props.user._id,
		},
		errors: {},
		selectImportance: {
			1: false,
			2: false,
			3: false,
		},
		selectOpen: false,
	};

	schema = {
		title: Joi.string().required().min(3).max(15).label("Title"),
		description: Joi.string().required().min(5).max(255).label("Description"),
		importance: Joi.number().optional(),
		category: Joi.string().optional(),
		createDate: Joi.number().required(),
		check: Joi.boolean().required(),
		date: Joi.string()
			.regex(/(0[1-9]|1[012])[-.](0[1-9]|[12][0-9]|3[01])[-.](19|20)\d\d/)
			.allow(""),
		userID: Joi.string().required(),
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
			date: "",
			userID: this.props.user._id,
		};
		this.setState({ errors: {}, selectImportance, data });
		this.props.handleOpenNote();
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const data = { ...this.state.data };
		data.createDate = Date.now();
		this.setState({ data }, () => {
			this.props.handleCreate(this.state.data);
			this.handleCancel();
		});
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
		this.setState({ data: data, selectOpen: false });
	};

	render() {
		const importanceLevel = [1, 2, 3];
		const categoryOptions = [
			{ key: "Home", value: "Home", text: "Home" },
			{ key: "School", value: "School", text: "School" },
			{ key: "Work", value: "Work", text: "Work" },
		];
		return (
			<div className="card note-form">
				<div className="card-body">
					<form onSubmit={this.handleSubmit}>
						<p className="note-title">Todo</p>
						<hr />
						{this.renderInput("title", "Title", "login-label")}
						{this.renderInput("description", "Description", "login-label")}
						{this.renderInput(
							"date",
							"Date",
							"login-label",
							"text",
							"",
							"mm-dd-yyyy"
						)}
						<p className="form-label">Importance Level</p>
						<Button.Group className="importance-buttons-group">
							{importanceLevel.map((index) => {
								return (
									<Button
										onClick={() => this.handleClickImportance(index)}
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
							className={
								this.state.selectOpen
									? "note-select select-open"
									: "note-select"
							}
							placeholder="Select a Category"
							onClick={() =>
								this.setState({ selectOpen: !this.state.selectOpen })
							}
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
						<Button
							color="blue"
							className="note-button"
							disabled={this.validate()}
						>
							Create
						</Button>
					</form>
				</div>
			</div>
		);
	}
}

export default NoteForm;
