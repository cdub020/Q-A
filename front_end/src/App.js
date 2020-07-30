import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      question : 0
    }
  }

  componentDidMount = () => {
    fetch('http://201.0.0.114:8080/questions')
      .then(response => response.json())
      .then(data => this.setState({ questions: data }))
  }
  componentDidUpdate = (prevprops) => {
    if (prevprops.location.pathname !== this.props.location.pathname) {
        fetch('http://201.0.0.114:8080/questions')
            .then(response => response.json())
            .then(data2 => this.setState({ questions: data2 }))
    }
}

  handleChange = (event) => {
    this.setState({question : event.target.value})
    return this.props.history.push('/question/' + event.target.value);
  }

  redirectme = () => {
    return this.props.history.push('/questions')
}

  render() {
    const { questions } = this.state;
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
                {questions.map((item,i) =>
                  <option value={item.id} key={i}>{item.question}</option>
                )}
              </select>
              <section className="qsection">
                <br></br>
                <h6>Don't see your question? Ask away!</h6>
                <button className="btnask" onClick={()=> this.redirectme()}>Ask a Question</button>
              </section>
      </div>
    );
  }
}

export default withRouter(App);
