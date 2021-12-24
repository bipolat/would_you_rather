import React, { Component } from 'react';
//import {  Switch } from 'react-router-dom';
import {  Route ,Routes,Fragment,Switch} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login  from './Login';
import User from './User';
import NewQ  from './NewQ';
import Leader  from './Leader';
import NoContent  from './NoContent';
import Navigate  from './Navigate';
import Main  from './Main';

class App extends Component
{
    render(){
        const  authour  = null;
        return(
            <Router>
        <div >
          {authour === "null" ? (
            <Route
              render={() => (
                <div>
                  <Login />
                </div>
              )}
            />
          ) : (
            <React.Fragment>
              <Navigate />
              <div>
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route path="/questions/bad_id" component={NoContent} />
                  <Route path="/questions/:question_id" component={User} />
                  <Route path="/add" component={NewQ} />
                  <Route path="/leaderboard" component={Leader} />
                  <Route component={NoContent} />
                </Switch>
              </div>
            </React.Fragment>
          )}
        </div>
      </Router>
        );               
    }
}

export default App;