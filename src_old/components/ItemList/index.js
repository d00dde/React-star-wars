import React, {Component} from 'react';

import './ItemList.css'

import Spinner from '../Spinner';


export default class ItemList extends Component {

  state = {
    itemList: null,
    loading: true
  }

  

  componentDidMount () {
    this.props.getItems().then((items) => {
    this.setState({
      itemList: items,
      loading: false
    });
  }
  ).catch();
}

	render () {

    const content = this.state.loading ? <Spinner /> : 
                    this.createElements(this.state.itemList);
    
    return(
			<ul className={"item-list list-group " + this.props.clazz}>
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