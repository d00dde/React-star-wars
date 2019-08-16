import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import './App.css';


export default class App extends Component {

  state = {
    selectedItem: null
  };

	render () {
		return (
			<div className='container'>
				<Header	/>
				<RandomPlanet />
      	<div className="row mb2">
        	<div className="col-md-6">
          	<ItemList onItemSelected={this.onItemSelected}/>
        	</div>
        	<div className="col-md-6">
          	<PersonDetails person={this.state.selectedItem} />
        	</div>
      	</div>
			</div>
			);
	}

  onItemSelected = (id) => {
    this.setState ({
      selectedItem: id
    });
  }
	
}
