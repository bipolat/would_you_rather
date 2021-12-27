import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

const LeaderboardPage = (props) => {
  let { users } = props;
    console.log("users",users);
    users = users.sort(
    (userA, userB) => {
      return (Object.keys(userB.answers).length + userB.questions.length) - (Object.keys(userA.answers).length + userA.questions.length);
    });
    console.log("users",users);

    return (
    users.map(user => {
      const userCreatedQuestionCount = user.questions.length;
      const userAnsweredQuestionCount = Object.keys(user.answers).length;
      

      return (

      <div>
        <Container fluid   key={user.id}>
          <Row>
            <Col sm={1}> <img className="card-img w-5 rounded-circle mr-2" src={user.avatarURL}/></Col>
            <Col sm={8}> <h4>  {user.name}</h4>
              <Row>
                <div><h5>Total Scor:{userAnsweredQuestionCount + userCreatedQuestionCount}</h5></div>    
              </Row>
              <Row>
                <div>Created questions: {userCreatedQuestionCount}</div>             
              </Row>
              <Row>
                <div>Answered questions: {userAnsweredQuestionCount}</div>   
              </Row>
            </Col>
                <Col sm={8}> <h4> </h4></Col>
          </Row>      
      </Container>
      </div>
        
     
    )
    })
  )
}

function mapStateToProps({ authentication, users }) {
  return {
    authentication,
    users: Object.keys(users).map(userId => users[userId])
  };
}

export default connect(mapStateToProps)(LeaderboardPage);
