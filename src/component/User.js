import React, { Component } from 'react';
import PResult  from './PResult';
import PQuestion  from './PQuestion';
import PTeaser  from './PTeaser';
import { Segment, Header, Grid, Image } from 'semantic-ui-react';

export class User extends Component {
    static propTypes = {
     
    };
    render() {
     

  
     
  
      return (
        <Segment.Group>

  
          <Grid divided padded>
            <Grid.Row>
              <Grid.Column width={5}>
              <h3>Img</h3>
              </Grid.Column>
              <Grid.Column width={11}>
               <h3>PlCntnt</h3>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
      );
    }
  }

export default User;