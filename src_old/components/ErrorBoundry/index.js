import React, {Component} from 'react';
import ErrorMsg from '../ErrorMsg';

export default class ErrorBoundry extends Component{
	
	state = {
		hasError: false
	}

	render () {
		if(this.state.hasError)
			return <ErrorMsg />;
		return( this.props.children );
	}

	componentDidCatch (error, info) {
		this.setState({ hasError: true });
		console.log(error);
		console.log(info.componentStack);
	}
}