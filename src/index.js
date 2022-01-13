import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import EntireFarm from './components/EntireFarm';
import Farm from './components/Farm'
import Seed from './components/Seed'
import Repo from './components/Repo'
import {observe} from './components/Game'

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals();
*/

const root = document.getElementById('root')

observe((seedPosition) => {
  ReactDOM.render(
    <App seedPosition={seedPosition} />,
    root)
})


/*
ReactDOM.render(
  <EntireFarm seedPosition={[0,0]} />,
  
  //<Farm brown>
  //  <Seed />
  //</Farm>,
  
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
