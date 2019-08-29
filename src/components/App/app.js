import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { StarshipDetails } from '../sw-components';
import { SwapiServiceProvider } from '../swapi-service-context';

import './App.css';

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
                        DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  render() {

    return (
      <ErrorBoundry>
        <Router>
          <SwapiServiceProvider value={this.state.swapiService} >
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />

              <RandomPlanet />
              <Route path='/'render={() => <h2>Welcome to SWDB</h2>} exact/>
              <Route path='/people/:id?'component={PeoplePage} />
              <Route path='/planets'component={PlanetsPage} />
              <Route path='/starships'component={StarshipsPage} exact/>
              <Route path='/starships/:id' 
                render={({ match }) => {
                  return <StarshipDetails itemId={match.params.id}/>
                }}/>
            </div>
          </SwapiServiceProvider>
        </Router>
      </ErrorBoundry>
    );
  }
}
