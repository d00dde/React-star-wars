import React, {Component} from 'react';

import Spinner from '../Spinner';
import './RandomPlanet.css';
import SwapiService from '../../services/SwapiService';

export default class RandomPlanet extends Component {

	swapi = new SwapiService();

	state = {
		planet: {},
		loading: true,
		error: false
	}

	componentDidMount () {
		this.updatePlanet();
		//setInterval(this.updatePlanet, 7000);
	}

	updatePlanet = () => {
		this.setState ({loading: true});
		const id = Math.floor(Math.random()*15) + 2;
		this.swapi.getPlanet(id).then((planet) => {
			this.setState ({
				planet: planet,
				loading: false
			});
		}).catch((err) => {
			console.log(err.message);
			this.setState ({error: true});
		});
	}

	render () {
			
		const view = this.state.error ? this.errorMsg () :
								this.state.loading ? <Spinner /> : this.content();
		
		return(
			<div className='random-planet rounded jumbotron'>
				{view}
			</div>
		);
	}

	content = () => {
		
		const {planet: { id, planetName, population, 
					rotationPeriod, diameter}} = this.state;
		
		return (
		<React.Fragment>
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
			</React.Fragment>
			);
	}

	errorMsg = () => {
		return (
		<div>Что-то пошло не так.</div>
		);
	}
}