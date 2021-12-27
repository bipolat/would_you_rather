import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import { handleQuestions } from '../actions/questions';

import QuestionComponent from './QuestionComponent';

class HomePage extends Component {
  componentDidMount() 
  {
    if (!this.props.questions) 
      {this.props.dispatch(handleQuestions());}
  }
  
  render() {
    const { user, questions, loading } = this.props;
 
    if (loading || !questions) 
      {return <span >loading...</span>;}
    
    const answeredQuestionIds = Object.keys(user.answers).sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    const allQuestionsIds = Object.keys(questions);
    let unansweredQuestionIds = allQuestionsIds.filter(id => !answeredQuestionIds.includes(id));    
    unansweredQuestionIds = unansweredQuestionIds.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return (
      <Tabs fill defaultActiveKey="unanswered">
        <Tab eventKey="unanswered" title="Unanswered Questions" style={{border: '2px solid #ffffff'}}>          
          {
            unansweredQuestionIds.length
              ? unansweredQuestionIds.map(q => <QuestionComponent key={q} aQid={q} />)
              : <span>There is no item</span>
          }
        </Tab>
        <Tab eventKey="answered" title="Answered Questions" style={{border: '2px solid #ffffff'}}>
          {
            answeredQuestionIds.length 
              ? answeredQuestionIds.map(q => <QuestionComponent key={q} aQid={q} />)
              : <span >There is no item</span>
          }
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps({ authentication, users, questions, loadingBar }) {
  return {
    user: users[authentication],
    questions,
    loading: loadingBar.default,
  };
}

export default connect(mapStateToProps)(HomePage);
