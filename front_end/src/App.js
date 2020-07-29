import React from 'react';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { BrowserRouter as Router, Switch, withRouter, Redirect, Route } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      answers : [],
      question : 0
    }
  }

  componentDidMount = () => {
    fetch('http://201.0.0.114:8080/questions')
      .then(response => response.json())
      .then(data => this.setState({ questions: data }))
  }

  handleChange = (event) => {
    this.setState({question : event.target.value})
    return this.props.history.push('/question/' + event.target.value);
  }

  render() {
    const { questions, answers } = this.state;
    return (
      <div className="App">
              <h4>Q & A About This Flight!</h4>
              <br></br>
              <select 
                className="questionselect" 
                value = "Select a question..." 
                id="questionselect"
                onChange = {this.handleChange}>
                <option value="default">Select a question...</option>
                {questions.map(item =>
                  <option value={item.id}>{item.question}</option>
                )}
              </select>
              <section className="qsection">
                <br></br>
                <h6>Don't see your question? Ask away!</h6>
                <button className="btnask">Ask a Question</button>
              </section>
      </div>
    );
  }
}

export default withRouter(App);
