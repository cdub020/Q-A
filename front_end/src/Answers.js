import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Table from 'react-bootstrap/Table'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import App from './App';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Answers extends React.Component {
    constructor() {
        super()
        this.state = {
            answers: [],
            question: [],
            helpful: 0,
            nothelpful: 0
        }
    }


    componentDidMount = () => {
        if (this.props.match.params.questionid !== undefined){
        fetch('http://201.0.0.114:8080/answers/answer/' + this.props.match.params.questionid)
            .then(response => response.json())
            .then(data => this.setState({ answers: data }));

        fetch('http://201.0.0.114:8080/questions/' + this.props.match.params.questionid)
            .then(response => response.json())
            .then(data2 => this.setState({ question: data2 }))
    }
}

    componentDidUpdate = (prevprops) => {
        if (prevprops.match.params.questionid !== this.props.match.params.questionid) {
            fetch('http://201.0.0.114:8080/answers/answer/' + this.props.match.params.questionid)
                .then(response => response.json())
                .then(data => this.setState({ answers: data }));

            fetch('http://201.0.0.114:8080/questions/' + this.props.match.params.questionid)
                .then(response => response.json())
                .then(data2 => this.setState({ question: data2 }))
        }
    }

    answeramount = () => {
        if (this.state.answers.length === 1) {
            return <p className="answers">{this.state.answers.length} Answer</p>

        }
        else {
            return <p className="answers">{this.state.answers.length} Answers</p>
        }
    }

    helpful = (num, ans) => {

            if (num === "1"){
                fetch('http://201.0.0.114:8080/answers/helpful/' + ans, {
                    method: 'POST'
                });
            }
            else{
                fetch('http://201.0.0.114:8080/answers/nothelpful/' + ans, {
                    method: 'POST'
                });
            }
    }

    render() {
        const { answers, question, helpful } = this.state;
        if (this.props.match.params.questionid != null) {
            return (
                <div className="topdiv">
                    <a className="question">{question.question}</a><br></br>
                    <a className="askedby">Asked by </a> <a className="user">{question.username}</a> <a className="qdate">· {question.questiondate}</a>
                    <br></br><br></br>
                    {this.answeramount()}
                    <Table className="table" striped="true" responsive="true">
                        <tbody className="tbody">
                            {answers.map(answers => {
                                return (
                                    <tr className="trow">
                                        <br></br>
                                        <p className="top"><span className="answeruser">{answers.username}</span> <span className="answerdate">{answers.date}</span></p>
                                        {answers.answer}<br></br><br></br>
                                        <button className="thumbup" onClick={() => {this.helpful("1", answers.id)}}><FontAwesomeIcon icon={faThumbsUp} /> Helpful {answers.helpful}</button>
                                        <button className="thumbdown" onClick={() => this.helpful("2", answers.id)}><FontAwesomeIcon icon={faThumbsDown} /> Not Helpful {answers.nothelpful}</button>
                                        <br></br><br></br>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <section>
                        <p className="provideanswer">Provide an answer:</p>
                        <button className="btnprovide">Post an Answer</button>
                    </section>
                </div>);
        }
        else {
            return (
                <h2>Ask or Select a Question to get Started!</h2>
            )
        }
    }
}
export default Answers;
