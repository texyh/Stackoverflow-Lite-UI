import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './containers/Home/Home'
export class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <div className="mt-4 container">
            <Switch>
              <Route path="/"  exact component={Home}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
