import React from 'react';
import EntireFarm from './components/EntireFarm';
import Repo from './components/Repo';
import {observe} from './components/Game'

/*
class App extends React.Component {
  render(){
    return (
      <div>
        <EntireFarm />
      </div>
    )
  }
}
*/



class App extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div className="App">
        <EntireFarm seedPosition={this.props.seedPosition} />
        
        
      </div>
    );
  }
}


export default App;
