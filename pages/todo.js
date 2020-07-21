import Navbar from "../components/navbar";
import { Button } from "semantic-ui-react";
import { Component } from "react";
import NoteForm from "../components/noteForm";
import axios from "axios";
import auth from "../middlewares/auth";
import Router from "next/router";

class Todo extends Component {
    state = {
        notePop: false
    }

    handleCreate = () => {
        const notePop = !this.state.notePop;
        this.setState({ notePop });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="create-button-container">
                <Button 
                    circular 
                    icon='plus' 
                    size="large" 
                    className="create"
                    onClick={this.handleCreate}
                />
                </div>
                <div 
                    className={this.state.notePop ? 
                        "note-popup-background" : 
                        "note-popup-background noteHide"
                }>
                    <div className="note">
                        <NoteForm handleCreate={this.handleCreate}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Todo;

export async function getServerSideProps(req, res) {
    // const { req, res } = context;
   const { data }= await axios.get("http://localhost:3000/api/notes");
    return { props: { notes: data } };
}