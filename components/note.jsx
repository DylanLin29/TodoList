import { Button } from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faClipboardCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Note = ({ title, description, importance, category }) => {
    return (
        <div className="card-wrapper">
            <div className="card">
                <img src="images/Background.png" className="card-img" />
                <img src={`images/${category}.png`} className="profile-img" />
                <h1>{title}</h1>
                <p className="job-title">Deadline</p>
                <Button primary className="flip-button">Flip</Button>
                <ul className="card-options">
                    <li><FontAwesomeIcon icon={faTrash} size="lg"/></li>
                    <li><FontAwesomeIcon icon={faClipboardCheck} size="lg"/></li>
                    <li><FontAwesomeIcon icon={faSpinner} size="lg"/></li>
                </ul>
            </div>
        </div>
    );
}

export default Note;