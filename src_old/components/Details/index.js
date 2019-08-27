import React, {Component} from 'react';
import ErrorButton from '../ErrorButton';

import './Details.css'
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';

  const Field = ({label, field, item}) => {
    console.log(item);
    return (
      <li className="list-group-item">
          <span className="term">{label}</span>
          <span>{item[field] ? item[field] : "uncnown"}</span>
      </li>
    );
  };

  export {
    Field
  }

export default class Details extends Component {

  state = {
    item: null,
    loading: false
  }

  componentDidUpdate (prevProps, prevState) {
    if(!this.props.item)
      return
    if (this.props.item === prevProps.item)
      return
    this.setState({loading: true});
    this.props.getDetails(this.props.item).then((item) => {
      this.setState({
        item,
        loading: false,
        throwError: false
      });
    });
  }

	render () {
    if(!this.state.item)
      return <div>Select a person</div>
    if(this.state.loading) 
      return <Spinner /> ;
    const { name, id } = this.state.item;
    const item = this.state.item;
    
    return(

			<div className={"person-details card "+ this.props.clazz}>
        <React.Fragment>
          <div className="img-cont">
            <img className="person-image"
                 src={this.props.getImage(id)} />
          </div>

          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children.props.children, (child) => {
                return React.cloneElement(child, {item});
              })}
            </ul>
            <ErrorButton />
          </div>
        </React.Fragment>
      </div>
		);
	}
}