import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './ShowLinks.css';
import Link from './Link';

class ShowLinks extends Component {
	render() {
		return(
			<div className="showLinks container">
				<h1>Link</h1>
				<div className="displayBox">
					<Link Points={-100} VoteRecord={1} Name="Ani" Link="//www.google.com" LinkName="Google"/>
					<Link Points={20000} VoteRecord={0} Name="Ani2" Link="//stackoverflow.com" LinkName="StackOverflow" />
					<Link Points={30000} VoteRecord={-1} Name="Ani3" Link="//facebook.com" LinkName="Facebook" />
				</div>
			</div>
		);
	}
}

export default ShowLinks;