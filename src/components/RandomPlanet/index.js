import React, {Component} from 'react';

import Spinner from '../Spinner';
import './RandomPlanet.css';
import SwapiService from '../../services/SwapiService';

export default class RandomPlanet extends Component {

	constructor () {
		super();
		//setInterval(this.updatePlanet, 15000);
	}

	swapi = new SwapiService();

	state = {
		planet: {}
	}

	updatePlanet = () => {
		const id = Math.floor(Math.random()*15) + 2;
		this.swapi.getPlanet(id).then((planet) => {
			this.setState ({planet});
		});
	}

	render () {
			
		const {planet: { id, planetName, population, 
					rotationPeriod, diameter}} = this.state;
		return(
			<div className='random-planet rounded jumbotron'>
				<img className='planet-image'
					src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
				<div>
					<h4>{planetName}</h4>
          <ul className="list-group list-group-flush">
           	<li className="list-group-item">
              <span className="term">Population:</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation period:</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter:</span>
              <span>{diameter}</span>
            </li>
          </ul>
				</div>
				<Spinner />
			</div>
		);
	}
}