import Joi from "joi-browser";
import Form from "../components/common/form";
import { Button } from "semantic-ui-react"

class NoteForm extends Form {

    state = {
        data: {
            title: "",
            description: "",
            importance: 1
        },
        errors: {}
    }

    schema = {
        title: Joi.string().required().label("Title"),
        description: Joi.string().required().label("Description"),
        importance: Joi.number().optional()
    };


    doSubmit = () => {
        // Call the server
        console.log("Submitted");
    }

    handleCancel = () => {
        this.setState({ errors: {} });
        const { handleCreate } = this.props;
        handleCreate();
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <p className="note-title">Todo</p>
                    <hr />
                    {this.renderInput("title", "Title", "login-label")}
                    {this.renderInput("description", "Description", "login-label")}
                    <Button 
                        color='red' 
                        onClick={this.handleCancel} 
                        className="note-button"
                        >Cancel</Button>
                    <Button 
                        color='blue'
                        className="note-button"
                        >Create</Button>
                </form>
        );
    }
}

export default NoteForm;