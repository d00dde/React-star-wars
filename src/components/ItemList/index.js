import React, {Component} from 'react';

import './ItemList.css'
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';


export default class ItemList extends Component {

  state = {
    peopleList: null,
    loading: true
  }

  swapi = new SwapiService();

  componentDidMount () {
    this.swapi.getAllPeople().then((peoples) => {
      this.setState({
        peopleList: peoples,
        loading: false
      });
    }
    ).catch(
    );

  }

	render () {

    const content = this.state.loading ? <Spinner /> : 
                    this.createElements(this.state.peopleList);
    
    return(
			<ul className="item-list list-group">
        {content}
      </ul>
		);
	}

  createElements = (list) => {
    return list.map((item) => {
      return <li key={item.id} className="list-group-item"
                onClick={() => {this.props.onItemSelected(item.id)}}>{item.name}</li>
    });
  }

}