import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Navbar, Nav as Navigate, Image } from 'react-bootstrap';

class Nav extends Component
{
    
    render(){
        const authedUser=true;
        return(
            <div>
                <Navbar>
                    <NavLink className="nav-link" to="/" exact activeClassName="active">
                        Homee
                    </NavLink>
                    <NavLink className="nav-link" to="/add">
                        New Question
                    </NavLink>
                    <NavLink className="nav-link" to="/leaderboard">
                        Leader Board
                    </NavLink>              
                </Navbar>

                {authedUser && (
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Image
               
                roundedCircle
                style={{ width: '30px', cursor: 'pointer' }}
              />
              <span>
                &nbsp; Hello, {}
                <button
                  className="btn btn-sm btn-outline-danger ml-4"
                  
                >
                  Logout
                </button>
              </span>
            </Navbar.Text>
          </Navbar.Collapse>
        )}

            </div>
        )
            
        
    }
}

export default Nav;