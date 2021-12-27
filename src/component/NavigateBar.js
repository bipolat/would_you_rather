import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { logout } from '../actions/authentication';

const NavigateBar = (props) => {
  const { users, authentication, dispatch } = props;

  const handleLogout = () => {
    dispatch(logout());
  }

  const userId = authentication;
  const user = users[userId];

  return (
    <Navbar bg="light">
      <div className="d-flex w-100 mx-auto">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
          <NavLink className="nav-link" to="/add">New Question</NavLink>
          <NavLink className="nav-link" to="/leaderboard">Leader Board</NavLink>
        </Nav>
        {authentication && (
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Image
                src={user.avatarURL}
                roundedCircle
                style={{ width: '30px', cursor: 'pointer' }}/>
              <span>&nbsp;{user.name} &nbsp;</span>
            </Navbar.Text>
            <NavLink className=" btn btn-sm btn-outline-success" to={`/`}   onClick={handleLogout}>Sign Out</NavLink>
          </Navbar.Collapse>)}
      </div>    
    </Navbar>);
}

function mapStateToProps({ authentication, users }) {
  return { authentication, users };
}

export default withRouter(connect(mapStateToProps)(NavigateBar));

