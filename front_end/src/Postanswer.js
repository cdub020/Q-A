import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { now } from 'moment';
import moment from 'moment';
import swal from 'sweetalert';


class Postanswer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question: [],
            username: undefined,
            answer: undefined,
        }
    }

    componentDidMount = () => {
        if (this.props.match.params.questionid !== undefined) {
            fetch('http://201.0.0.114:8080/questions/' + this.props.match.params.questionid)
                .then(response => response.json())
                .then(data2 => this.setState({ question: data2 }))
        }
    }

    componentWillReceiveProps = (newprops) => {
        if (newprops.match.params.questionid) {
            fetch('http://201.0.0.114:8080/questions/' + this.props.match.params.questionid)
                .then(response => response.json())
                .then(data2 => this.setState({ question: data2 }))
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const date = Date(now);
        fetch('http://201.0.0.114:8080/answers/' + this.props.match.params.questionid, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                answer: this.state.answer,
                date: moment(date).format('MM-DD-YYYY'),
                helpful: 0,
                nothelpful: 0
            })
        }).then(() => swal("Answer Saved!", "Press OK to continue..."))
        .then(() => this.props.history.goBack())

    }

    render() {
        const { question, answer, username } = this.state;
        return (
            <div>
                <Form>
                    <span className="question">{question.question}</span><br></br>
                    <span className="askedby">Asked by </span> <span className="user">{question.username}</span> <span className="qdate">· {question.questiondate}</span>
                    <br></br><br></br>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" name="username" value={username} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your answer:</Form.Label>
                        <Form.Control as="textarea" rows="3" name="answer" value={answer} onChange={this.onChange} />
                    </Form.Group>
                    <Button as="input" type="submit" onClick={this.handleSubmit}/>{' '}
                    <Button as="input" type="button" value="Cancel" onClick={() => this.props.history.goBack()} />{' '}
                </Form>
            </div>
        )
    }
}

export default withRouter(Postanswer)