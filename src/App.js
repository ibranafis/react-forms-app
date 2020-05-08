import React, { Component } from "react";
import "./App.css";
import Home from './containers/Home';
import Toolbar from './components/Toolbar/Toolbar';
import Nav from './components/Nav/index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Tasks from './containers/Tasks';
import Settings from './containers/Settings';

function App(){
	return(
	<Router>
	<div className="App">
	<Toolbar/>
	<Nav/>
	<Route path="/" exact component={Home}/>
	<Route path="/tasks" component={Tasks}/>
	
	<Route path="/settings" component={Settings}/>
	
	</div>
	</Router>

);
}	
	
	
export default App;