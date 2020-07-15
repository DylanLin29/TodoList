import { Label } from 'semantic-ui-react';

const FormInput = ({ name, label, value, error, type, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                value={value}
                name={name}
                type={type}
                onChange={onChange}
                id={name} 
                className="form-control"
            />
            {error && <Label basic color='red' pointing className="error-label">{error}</Label>}
        </div>

    )
}

export default FormInput;