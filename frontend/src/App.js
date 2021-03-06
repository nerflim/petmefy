import React from 'react';
import './App.css';
import './vendor.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Adopt from './components/pages/Adopt';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />

				<Route exact path='/' component={Home} />
				<Route path='/shop' component={Shop} />
				<Route path='/adopt' component={Adopt} />

				<Footer />
			</div>
		</Router>
	);
}

export default App;
