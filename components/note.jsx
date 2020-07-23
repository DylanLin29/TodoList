import axios from "axios";
import { Button } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faClipboardCheck,
  faSpinner,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Note = ({
  title,
  description,
  importance,
  category,
  _id,
  handleDelete,
}) => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(true);
  };

  const handleUnCheck = () => {
    setCheck(false);
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img" />
        <img src={`images/${category}.png`} className="profile-img" />
        <p className="card-importance">{importance}</p>
        {check && (
          <FontAwesomeIcon className="card-check" icon={faCheck} size="2x" />
        )}
        <h1>{title}</h1>
        <p className="card-date">Deadline</p>
        <Button primary className="flip-button">
          Flip
        </Button>
        <ul className="card-options">
          <li onClick={() => handleDelete(_id)}>
            <FontAwesomeIcon icon={faTrash} size="lg" />
          </li>
          <li onClick={() => handleCheck()}>
            <FontAwesomeIcon icon={faClipboardCheck} size="lg" />
          </li>
          <li onClick={() => handleUnCheck()}>
            <FontAwesomeIcon icon={faSpinner} size="lg" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Note;
