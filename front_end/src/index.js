import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './index.css';
import App from './App';
import Answers from './Answers'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Container fluid>
      <Row className="row">
        <Router>
          <Col className="home" lg={3}>
          <App />
          </Col>
          <Col className="answerscom" lg={5}>
            <Switch>
              <Route exact path="/question/:questionid" component={Answers} />
              <Route exact path="/" component={Answers} />
            </Switch>

          </Col>
        </Router>
      </Row>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
