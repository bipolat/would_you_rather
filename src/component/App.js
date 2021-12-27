import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/initData';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import LoadingBar from 'react-redux-loading';
import NavigateBar from './NavigateBar';
import HomePage from './HomePage';
import NewQuestionPage from './NewQuestionPage';
import LeaderboardPage from './LeaderboardPage';
import QuestionPage from './QuestionPage';
import SignIn from './SignIn';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  
  render() {
    return (
      <Router>     
        <LoadingBar />
        {this.props.loading === true ? null : (
          <Container fluid >
            <Row>
             {this.props.authentication === '' ? 
             <SignIn /> 
             : (
               <Fragment>
                <Row  className="justify-content-md-center">
                   <Col xs={9}>                
                   <NavigateBar />
                   </Col>
                 </Row>
                 <Row  className="justify-content-md-center">
                   <Col xs={9}>
                   <Switch>
                     <Route exact path="/" component={HomePage} />
                     <Route exact path="/question/:id" component={QuestionPage} />
                     <Route exact path="/add" component={NewQuestionPage} />
                     <Route exact path="/leaderboard" component={LeaderboardPage} />
                   </Switch>
                   </Col>
                 </Row>
               </Fragment>
             )}
            </Row>
          </Container>
        )}      
      </Router>
    );
  }
}

function mapStateToProps({ users, authentication }) {
  return {
    authentication,
    loading: users === null,
  };
}

export default connect(mapStateToProps)(App);
