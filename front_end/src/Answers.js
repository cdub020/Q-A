import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';


class Answers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            answers: [],
            question: []
        }
    }


    componentDidMount = () => {
        if (this.props.match.params.questionid !== undefined) {
            fetch('http://201.0.0.114:8080/answers/answer/' + this.props.match.params.questionid)
                .then(response => response.json())
                .then(data => this.setState({ answers: data }));

            fetch('http://201.0.0.114:8080/questions/' + this.props.match.params.questionid)
                .then(response => response.json())
                .then(data2 => this.setState({ question: data2 }))
        }
    }

    componentDidUpdate = (prevprops) => {
        if (prevprops.location.pathname !== this.props.location.pathname) {
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
        const tmpanswers = [...this.state.answers]
        if (num === "1") {
            fetch('http://201.0.0.114:8080/answers/helpful/' + ans, {
                method: 'POST'
            }).then(() => {
                fetch('http://201.0.0.114:8080/answers/answer/' + this.props.match.params.questionid)
                    .then(response => response.json())
                    .then(data => this.setState({ answers: data }));
            })
        }
        else {
            fetch('http://201.0.0.114:8080/answers/nothelpful/' + ans, {
                method: 'POST'
            }).then(() => {
                fetch('http://201.0.0.114:8080/answers/answer/' + this.props.match.params.questionid)
                    .then(response => response.json())
                    .then(data => this.setState({ answers: data }));
            })
        }
    }

    redirectme = () => {
        return this.props.history.push({
            pathname: '/postanswer/' + this.props.match.params.questionid,
            state: { questionid: this.props.match.params.questionid }
        })
    }

    render() {
        const { answers, question } = this.state;
        if (this.props.match.params.questionid != null && answers.length > 0) {
            return (
                <div className="topdiv">
                    <span className="question">{question.question}</span><br></br>
                    <span className="askedby">Asked by </span> <span className="user">{question.username}</span> <span className="qdate">· {question.questiondate}</span>
                    <br></br><br></br>
                    {this.answeramount()}
                    <Table className="table" striped="true" responsive="true">
                        <tbody className="tbody">
                            {answers.map((answers, i) => {
                                return (
                                    <tr className="trow" key={i}>
                                        <br></br>
                                        <p className="top"><span className="answeruser">{answers.username}</span> <span className="answerdate">{answers.date}</span></p>
                                        {answers.answer}<br></br><br></br>
                                        <button className="thumbup" onClick={() => { this.helpful("1", answers.id) }}><FontAwesomeIcon icon={faThumbsUp} /> Helpful {answers.helpful}</button>
                                        <button className="thumbdown" onClick={() => this.helpful("2", answers.id)}><FontAwesomeIcon icon={faThumbsDown} /> Not Helpful {answers.nothelpful}</button>                                        <br></br><br></br>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <section>
                        <p className="provideanswer">Provide an answer:</p>
                        <button className="btnprovide" onClick={() => this.redirectme()}>Post an Answer</button>
                    </section>
                </div>);
        }
        else if (this.props.match.params.questionid != null && answers.length === 0) {
            return (
                <section>
                    <span className="question">{question.question}</span><br></br>
                    <span className="askedby">Asked by </span> <span className="user">{question.username}</span> <span className="qdate">· {question.questiondate}</span>
                    <br></br><br></br>
                    <p className="provideanswer">Be the first to answer!</p>
                    <button className="btnprovide" onClick={() => this.redirectme()}>Post an Answer</button>
                </section>
            )
        }
        else {
            return (
                <div>
                    <h2>Ask or Select a Question to get Started!</h2>
                </div>
            )
        }
    }
}
export default withRouter(Answers);
