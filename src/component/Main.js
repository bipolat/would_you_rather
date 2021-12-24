import React, { Component } from 'react';
import User from './User';
import Question from './Question';
import { Tab } from 'semantic-ui-react';

class Main extends Component
{
    render(){
        return(
            <div style={{backgroundColor: "#F00000"}}>
                <h4>
                Main
                
                </h4>
                <Tab panes={panes}   className="tab"  />
            </div>
        )
            
        
    }
}

const panes = [
    { menuItem: 'Unanswered', render: () => <Tab.Pane><Question/></Tab.Pane> },
    { menuItem: 'Answered', render: () => <Tab.Pane><Question/></Tab.Pane> }

  ]

export default Main;