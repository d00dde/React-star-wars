import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import Page from '../Page';
import ErrorBoundry from '../ErrorBoundry';
import {Field} from '../Details';

import SwapiService from '../../services/SwapiService';

import './App.css';


export default class App extends Component {



  swapi = new SwapiService();

	render () {
		return (
			<div className='container'>
				<Header	/>
				<RandomPlanet />
      	<div>
      		<ErrorBoundry>
          	<Page getItems={this.swapi.getAllPeople}
          				getDetails={this.swapi.getPerson}
          				getImage={this.swapi.getPersonImg}
                  fields={this.personFields}/>
            <Page getItems={this.swapi.getAllPlanets}
            			getDetails={this.swapi.getPlanet}
            			getImage={this.swapi.getPlanetImg}
                  fields={this.planetFields}/>
            <Page getItems={this.swapi.getAllStarships}
            			getDetails={this.swapi.getStarship}
            			getImage={this.swapi.getStarshipImg}
            			fields={this.starshipFields}/>
          </ErrorBoundry>                      
      	</div>
			</div>
			);
  }
		
  personFields = (
    <React.Fragment>
  		<Field label='Gender:' field='gender' />
  		<Field label='Birth year:' field='birthYear' />
  		<Field label='Eye color:' field='eyeColor' />
    </React.Fragment>
	);

  planetFields = (
    <React.Fragment>
      <Field label='Population:' field='population' />
      <Field label='Diametr:' field='diameter' />
      <Field label='Period:' field='rotationPeriod' />
    </React.Fragment>
  );

  starshipFields = (
    <React.Fragment>
      <Field label='Manufacturer:' field='manufacturer' />
      <Field label='Length:' field='length' />
      <Field label='Cost:' field='costInCredits' />
    </React.Fragment>
  );
  


	
}
