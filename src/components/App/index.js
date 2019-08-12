import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import './App.css';


export default class App extends Component {

	render () {
		return (
			<div className='container'>
				<Header	/>
				<RandomPlanet />
      	<div className="row mb2">
        	<div className="col-md-6">
          	<ItemList />
        	</div>
        	<div className="col-md-6">
          	<PersonDetails />
        	</div>
      	</div>
			</div>
			);
	}

	
}
