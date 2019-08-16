import React, {Component} from 'react';

import './PersonDetails.css'
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';

export default class PersonDetails extends Component {

  swapi = new SwapiService();

  state = {
    person: null,
    loading: false
  }

  componentDidUpdate (prevProps, prevState) {
    if(!this.props.person)
      return
    if (this.props.person === prevProps.person)
      return
    this.setState({loading: true});
    console.log('loading');
    this.swapi.getPerson(this.props.person).then((person) => {
      this.setState({
        person,
        loading: false
      });
    });
  }

	render () {
    if(!this.state.person) {
      return <div>Select a person</div>
    }
    console.log('render');
    const view = this.state.loading ? <Spinner /> : this.content();
    return(
			<div className="person-details card">
        {view}
      </div>
		);
	}

  content = () => {
    const { id, name, gender, birthYear, eyeColor } = this.state.person;
    return (
      <React.Fragment>
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender ? gender: "uncnown"}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear ? birthYear: "uncnown"}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor ? eyeColor: "uncnown"}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}