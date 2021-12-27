import React, { Component } from 'react';
import { Card, Button,  } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleQuestions, handleSetQuestionAnswer } from '../actions/questions';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class QuestionPage extends Component {
  componentDidMount() {
    if (!this.props.questions) {
      this.props.dispatch(handleQuestions());
    }
  }

  state = {
    selectedOption: 'optionOne',
  };
  
  handleChange = (e) => {
    const selectedOption = e.target.value;
console.log("Poll",selectedOption);
    this.setState(() => ({ selectedOption }));
  }

  setOption = () => {
    const { id, user } = this.props;
    this.props.dispatch(
      handleSetQuestionAnswer({
        authentication: user.id,
        qid: id,
        answer: this.state.selectedOption,
      })
    );
  }

  render() {
    const { id, question, authorName, authorAvatar, user, questionStatusFlag } = this.props;
    
    if (questionStatusFlag === "Loading") {return <h3>Loading</h3>;}
    if (questionStatusFlag === "NotExist") {return <h3>NotExist</h3>}

    const answer = user.answers[id];
    const optionOneVotedCount = question.optionOne.votes.length;
    const optionTwoVotedCount = question.optionTwo.votes.length;
    const totalVotedCount = optionOneVotedCount + optionTwoVotedCount;
    const rateOneValue = (optionOneVotedCount / totalVotedCount * 100).toFixed(0);
    const rateTwoValue = (optionTwoVotedCount / totalVotedCount * 100).toFixed(0);

    return (
      answer? 
      (<div>
        <Container fluid   key={user.id}>
          <Row>
            <Col sm={1}> <img className="card-img w-5 rounded-circle mr-2" src={authorAvatar}/></Col>
            <Col sm={8}> <h4>  {authorName} asks</h4>
          <Row>
            <Card key="optionOne" variant={answer === 'optionOne' ? 'success' : 'secondary'}>
            {answer === 'optionOne' ? (<h5 >Voted</h5>): (<h5 >Not Voted</h5>)}
            <h4>Option : {question.optionOne.text}</h4>
            <h4 >Resault : {optionOneVotedCount} out of {totalVotedCount} voted.Rate {rateOneValue} %</h4></Card>
          </Row>
         <Row>
           <Card key="optionTwo" variant={answer === 'optionTwo' ? 'success' : 'secondary'}>
           {answer === 'optionTwo' ? (<h5 >Voted</h5>): (<h5 >Not Voted</h5>)}
           <h4>Option : {question.optionTwo.text}</h4>
           <h4 >Resault : {optionTwoVotedCount} out of {totalVotedCount} voted.Rate {rateTwoValue} %</h4></Card>
          </Row>
          </Col><Col sm={8}> <h4> </h4></Col>
          </Row>
        </Container>
      </div>) 
      : (
      <div>
        <Container fluid   key={user.id}>
          <Row>
            <Col sm={1}> <img className="card-img w-5 rounded-circle mr-2" src={user.avatarURL}/></Col>
            <Col sm={8}> <h4>  {authorName} asks</h4>
            <Row><div>Would you rather?</div> </Row>
            <Row><div className="form-check">
                 <input className="form-check-input" type="radio" name="radio" id="radioOne" value="optionOne" checked={this.state.selectedOption === "optionOne"} onChange={this.handleChange} />
                 <label className="form-check-label" htmlFor="radioOne">{question.optionOne.text}</label></div></Row>
            <Row><div className="form-check">
                  <input className="form-check-input" type="radio" name="radio" id="radioTwo" value="optionTwo" checked={this.state.selectedOption === "optionTwo"} onChange={this.handleChange} />
                  <label className="form-check-label" htmlFor="radioTwo">{question.optionTwo.text}</label></div></Row>
            <Row><Button className="w-100 mt-4" variant="success" onClick={this.setOption}>Submit</Button></Row>
            </Col><Col sm={8}> <h4> </h4></Col>
          </Row>
        </Container>
      </div>));
  }
}

function mapStateToProps({ authentication, questions, users }, props) {
  if (!questions) {return { questionStatusFlag: "Loading" };}

  const { id } = props.match.params;
  const question = questions[id];

  if (!question) {
    return {questionStatusFlag:"NotExist"};
  }

  const author = users[question.author];
  const user = users[authentication];

  return {
    id,
    question,
    authorName: author.name,
    authorAvatar: author.avatarURL,
    user,
    authentication,
    questions
  };
}

export default withRouter(connect(mapStateToProps)(QuestionPage));
