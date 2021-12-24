import React, { Component } from 'react';
import PResult  from './PResult';
import PQuestion  from './PQuestion';
import PTeaser  from './PTeaser';

class User extends Component
{
    render(){
        return(
            <div style={{border: '10px solid rgba(0, 0, 0, 5)'},{backgroundColor: "#500000"}}>
                <h4>
                User
                <PResult/>
                <PQuestion/>
                <PTeaser/>
                </h4>
            </div>
        )
            
        
    }
}

export default User;