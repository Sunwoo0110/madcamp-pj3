import React from 'react';
import EntireFarm from './components/EntireFarm';
import './App.css';
import Repo from './components/Repo';
import {observe} from './components/Game'

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  )
}

class App extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div className="App">
        <div className="title_nav">
          <div style={{color : 'white', fontSize : '30px'}}>Title</div>
        </div>
        <div className="main">
          
            <EntireFarm seedPosition={this.props.seedPosition} />  
            
        </div>
      </div>
    );
  }
}

export default App;
