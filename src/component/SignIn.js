import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Button, Container, Row, Col  } from 'react-bootstrap';
import { login } from '../actions/authentication';


class SignIn extends Component {
  state = {
    selectedUser: '',
  };
  
  handleChange = (e) => {
    const selectedUser = e.target.value === 'Select user' ? '' : e.target.value;
    this.setState(() => ({ selectedUser }));
  }

  setauthentication = () => {
    this.props.dispatch(login(this.state.selectedUser));
  }

  render() {
    return (
      <div>
        <Container fluid>
           <Row className="justify-content-md-center" >
             <Col  xs={4}>
               <Row  > <h2>Welcome to the Would You Rather App!</h2></Row>
               <Row><img src={"https://miro.medium.com/max/312/1*SRL22ADht1NU4LXUeU4YVg.png"}/></Row>
               <Row>
                 <select className="form-control" value={this.state.selectedUser} onChange={this.handleChange}>
                 <option>Select user</option>
                 {this.props.users.map((user) => (
                 <option key={user.id} value={user.id}>{user.name}</option>))}</select></Row>
               <Row><Button className="w-100 mt-3" disabled={!this.state.selectedUser} variant="success" onClick={this.setauthentication}>Sign In</Button></Row>
             </Col>
           </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {users: Object.keys(users).map(user => users[user])};
}

export default connect(mapStateToProps)(SignIn);
