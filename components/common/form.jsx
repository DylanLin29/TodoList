import { Component } from "react";
import Joi from "joi-browser";
import Input from "./formInput";

class Form extends Component {
	state = {
		data: {},
		errors: {},
		response: {
			success: true,
			message: "",
		},
	};

	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		return error ? error.details[0].message : null;
	};

	validate = () => {
		const { error } = Joi.validate(this.state.data, this.schema, {
			abortEarly: false,
		});
		if (!error) {
			return null;
		}
		const errors = {};
		error.details.map((item) => (errors[item.path[0]] = item.message));
		return errors;
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const errors = this.validate();
		this.setState({ errors: errors || {} });
		if (errors) {
			return;
		}
		this.doSubmit();
	};

	handleChange = ({ currentTarget: input }) => {
		this.setState({ response: { success: true, message: "" } });

		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);
		if (errorMessage) {
			if (errorMessage.includes("pattern")) {
				errors[
					input.name
				] = `date" with value ${input.value} fails to match the required pattern: mm-dd-yyyy`;
			} else {
				errors[input.name] = errorMessage;
			}
		} else {
			delete errors[input.name];
		}

		const data = { ...this.state.data };
		data[input.name] = input.value;

		this.setState({ data, errors });
	};

	renderButton = (label, buttonColor = "") => {
		const buttonClass = "btn" + buttonColor;
		return (
			<button className={buttonClass} disabled={this.validate()}>
				{label}
			</button>
		);
	};

	renderInput = (
		name,
		label,
		labelClass = "",
		type = "text",
		error = "",
		placeHolder = ""
	) => {
		const { data, errors } = this.state;
		return (
			<Input
				type={type}
				name={name}
				label={label}
				labelClass={labelClass}
				value={data[name]}
				onChange={this.handleChange}
				error={error || errors[name]}
				placeHolder={placeHolder}
			/>
		);
	};
}

export default Form;
