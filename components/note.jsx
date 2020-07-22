import axios from "axios";
import { Button } from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faClipboardCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Note = ({ title, description, importance, category, _id }) => {
    const handleDelete = async (_id) => {
        try {
            await axios.delete("http://localhost:3000/api/notes", { data: _id });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="card-wrapper">
            <div className="card">
                <img src="images/Background.png" className="card-img" />
                <img src={`images/${category}.png`} className="profile-img" />
                <p className="card-importance">{importance}</p>
                <h1>{title}</h1>
                <p className="card-date">Deadline</p>
                <Button primary className="flip-button">Flip</Button>
                <ul className="card-options">
                    <li onClick={() => handleDelete(_id)}><FontAwesomeIcon icon={faTrash} size="lg"/></li>
                    <li><FontAwesomeIcon icon={faClipboardCheck} size="lg"/></li>
                    <li><FontAwesomeIcon icon={faSpinner} size="lg"/></li>
                </ul>
            </div>
        </div>
    );
}

export default Note;