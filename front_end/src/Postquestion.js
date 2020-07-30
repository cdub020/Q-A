import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { now } from 'moment';
import moment from 'moment';
import swal from 'sweetalert';


class Postquestion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: undefined,
            question: undefined
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const date = Date(now);

        fetch('http://201.0.0.114:8080/questions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                question: this.state.question,
                questiondate: moment(date).format('MM-DD-YYYY'),
                flight: {
                    airline: "United Airlines",
                    arrivingloc: "Las Vegas, NV",
                    departingloc: "Honolulu, HI",
                    flightnumbers: "372, 672"
                }
            })
        }).then(() => swal("Question Saved!", "Press OK to continue..."))
            .then(() => this.props.history.goBack())

    }

    render() {
        const { question, username } = this.state;
        return (
            <div>
                <Form>
                    <h3 className="question">Enter your question:</h3>
                    <br></br><br></br>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" name="username" value={username} onChange={this.onChange} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your question:</Form.Label>
                        <Form.Control as="textarea" rows="3" name="question" value={question} onChange={this.onChange} />
                    </Form.Group>
                    <Button as="input" type="submit" onClick={this.handleSubmit} />{' '}
                    <Button as="input" type="button" value="Cancel" onClick={() => this.props.history.goBack()} />{' '}
                </Form>
            </div>
        )
    }
}

export default withRouter(Postquestion)