import React, { Component } from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import './css/Style.css';
import {BrowserRouter, Route} from 'react-router-dom';
import ActorsContainer from './components/actorsContainer';
import Actress from './components/actress'
import Films from './components/films'



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar title="Oscars 2020"/>
        
        <Route exact path="/" render={()=> <Home title="Oscar Winners" />} />
        <Route path="/actors/" render={() => <ActorsContainer title="Best Actors"/>} />
        <Route path="/actress/" render={()=><Actress title="Best Actress"/>} />
        <Route path="/films" render={()=> <Films title="Best Films" />} />
      </div>
      </BrowserRouter>
    )
  }
}

