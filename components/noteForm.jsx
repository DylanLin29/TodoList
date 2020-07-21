import Joi from "joi-browser";
import axios from "axios";
import Form from "../components/common/form";
import { Button } from "semantic-ui-react"

class NoteForm extends Form {

    state = {
        data: {
            title: "",
            description: "",
            importance: 3
        },
        errors: {},
        selectImportance: {
            1: false,
            2: false,
            3: false
        }
    }

    schema = {
        title: Joi.string().required().label("Title"),
        description: Joi.string().required().label("Description"),
        importance: Joi.number().optional()
    };


    doSubmit = async() => {
        // Call the server
        await axios.post("/api/notes", this.state.data);
        const { handleCreate } = this.props;
        handleCreate();
    }

    handleCancel = () => {
        const selectImportance = {
            1: false,
            2: false,
            3: false
        }
        const data = {
            title: "",
            description: "",
            importance: 3
        }
        this.setState({ errors: {}, selectImportance, data });
        const { handleCreate } = this.props;
        handleCreate();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.doSubmit();
    }

    handleClickImportance = (index) => {
        const updateSelectImportance = {...this.state.selectImportance};
        const updateData = {...this.state.data};
        updateData.importance = index;
        for(let i = 1; i <= 3; i++) {
            updateSelectImportance[i] = false;
        }
        updateSelectImportance[index] = true;
        this.setState({ selectImportance: updateSelectImportance, data: updateData });
    }

    render() {
        const importanceLevel = [1,2,3];
        return (
                <form onSubmit={this.handleSubmit}>
                    <p className="note-title">Todo</p>
                    <hr />
                    {this.renderInput("title", "Title", "login-label")}
                    {this.renderInput("description", "Description", "login-label")}
                    <p className="form-label">Importance</p>
                    <Button.Group className="importance-buttons-group">
                        {
                            importanceLevel.map(index => {
                                return (
                                    <Button 
                                        onClick={() => this.handleClickImportance(index)}
                                        key={index}
                                        type="button"
                                        className={this.state.selectImportance[index] ? 
                                        "importance-button-select": "importance-button"}
                                    >{index}</Button>
                                );
                            })
                        }
                    </Button.Group>
                    
                    <br />
                    <Button 
                        color='red' 
                        onClick={this.handleCancel} 
                        className="note-button"
                        type="button"
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