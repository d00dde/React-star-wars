import React, {Component} from 'react';
import ItemList from '../ItemList';
import Details from '../Details';

import './Page.css';

export default class Page extends Component {

  state = {
    selectedItem: null
  };


	render () {
		return (
			<div className="page">
				<ItemList clazz="col-lg-6"
									onItemSelected={this.onItemSelected}
									getItems={this.props.getItems}/>
				
				<Details  clazz="col-lg-6"
									item={this.state.selectedItem}
									getDetails={this.props.getDetails}
									getImage={this.props.getImage}>

					{this.props.fields}
				</Details>
			</div>
		)
	}

  onItemSelected = (id) => {
    this.setState ({ selectedItem: id });
  }
}