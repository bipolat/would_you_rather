import React, { Component } from 'react';
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
        return(
            <div style={{backgroundColor: "#F0F0F5"}}>
                <h4>
                    App
                </h4>
                <Login/>
                <Navigate/>
                <Main />
                <User/>
                <NewQ/>
                <Leader/>
                <NoContent/>
            </div>
        )
            
        
    }
}

export default App;