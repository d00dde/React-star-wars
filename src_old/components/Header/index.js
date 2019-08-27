import React, {Component} from 'react';
import './Header.css'

export default class Header extends Component {


	render () {
		return(
			<div className='header d-flex'>
				<h3 className='logo'>
					<a href="#">Star DB</a>
				</h3>
				<ul className='menu d-flex'>
					<li><a href="#">People</a></li>
					<li><a href="#">Planet</a></li>
					<li><a href="#">Starships</a></li>
				</ul>
			</div>
		);
	}
}