import { Label } from "semantic-ui-react";

const FormInput = ({
	name,
	label,
	value,
	error,
	type,
	labelClass,
	onChange,
	placeHolder,
}) => {
	return (
		<div className="form-group">
			<label htmlFor={name} className={labelClass}>
				{label}
			</label>
			<input
				value={value}
				name={name}
				type={type}
				onChange={onChange}
				id={name}
				className="form-control"
				placeholder={placeHolder}
			/>
			{error && (
				<Label basic color="red" pointing className="error-label">
					{error}
				</Label>
			)}
		</div>
	);
};

export default FormInput;
