import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const QuestionComponent = (props) => {
  const { question } = props;
  const { pollId, avatarURL, author, answerText } = question;
  console.log(question)
  return (
    <div>
    <Container fluid   >
      <Row>
        <Col sm={1}> <img className="card-img w-5 rounded-circle mr-2" src={avatarURL}/></Col>
          <Col sm={8}> <h4>  {author}</h4>
            <Row>
            <div>{answerText}</div>        
            </Row>
            <Row>
            <NavLink className="w-100 btn btn-sm btn-outline-success" to={`/question/${pollId}`}>View Poll</NavLink>
            </Row>
          </Col>
        <Col sm={8}> <h4> </h4></Col>
      </Row>
    </Container>
  </div>);}

function mapStateToProps({ authentication, users, questions }, { aQid }) {
  const question = questions[aQid];
  const user = users[authentication];
  const answer = question[user.answers[aQid]];
  const authorUser = users[question.author];
  let answerText = '';

    if (answer) 
        {answerText = answer.text;}
      else 
        {answerText = question.optionOne.text  + "-" + question.optionTwo.text;}

    return {
      question: question? 
        {pollId: aQid,avatarURL: users[question.author].avatarURL,author: authorUser.name,answerText}: 
        null,authentication };}

export default connect(mapStateToProps)(QuestionComponent);
