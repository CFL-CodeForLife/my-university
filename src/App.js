import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
// import './App.css';
import Header from './Header';
import Courses from './views/Courses';

function App() {
  return (
    <div className="App">
		<Header />
		{/* <h1>page 1</h1> */}
		
		<Router>
			<Switch>
				<Route path="/test" >
					<Courses />
				</Route>
				<Route path="/Courses">
					<Courses />
				</Route>
			</Switch>
		</Router>
    </div>
  );
}

export default App;
