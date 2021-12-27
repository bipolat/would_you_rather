import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { handleNewQuestion } from '../actions/questions';
import { Container, Row, Col,Button } from 'react-bootstrap';

class NewQuestionPage extends Component {
  state = {optionOneText: '',optionTwoText: ''}

  handleChange = (e) => {
    if (e.target.id === 'optionOneInput') {
      this.setState(() => ({ optionOneText: e.target.value }));
    }
    else {
      this.setState(() => ({ optionTwoText: e.target.value }));
    }
  }

  addNewQuestion = () => {
    this.props.dispatch(
      handleNewQuestion({
        author: this.props.authentication,
        optionOneText: this.state.optionOneText,
        optionTwoText: this.state.optionTwoText
      })
    );
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row><Col > <h4>Create New Question </h4></Col></Row>
          <Row>
            <input type="text" className="form-control" id="optionOneInput" onChange={this.handleChange} value={this.state.optionOneText} placeholder="Enter option one here" />
          </Row>
          <Row><Col > <h5>OR</h5></Col></Row>
          <Row>
            <input type="text" className="form-control" id="optionTwoInput" onChange={this.handleChange} value={this.state.optionTwoText} placeholder="Enter option two here" />
          </Row>
          <Row>
            <Button className="w-100 mt-3" variant="success" onClick={this.addNewQuestion}  disabled={this.state.optionOneText === '' || this.state.optionTwoText === ''}>Submit</Button>
          </Row>
        </Container>
      </div>
    )
  }
}

function mapStateToProps({ authentication }) {
  return { authentication };
}

export default withRouter(connect(mapStateToProps)(NewQuestionPage));
