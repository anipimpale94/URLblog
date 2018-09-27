import React, { Component } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import './ShowLinks.css';
import Link from './Link';

class ShowLinks extends Component {
	state = {
		links: []
	}
	
	componentDidMount() {
		axios.get(`http://localhost:3000/links`)
			.then(res => {
			let links = res.data;
			console.log(links)
			this.setState({ links });
			})
	}

	checkVoteRecord(points) {
		if(points>0) {
			return 1;
		}
		else if(points < 0) {
			return -1;
		}
		else return 0;
	}

	render() {
		return(
			<div className="showLinks container">
				<h1>Link</h1>
				{/* <ul>
					{ this.state.persons.map(person => <li>{person.name}</li>)}
				</ul> */}
				<div className="displayBox">
					{
						this.state.links.map(
							url => <Link Points={url.points} VoteRecord={0} Name={url.name} Link={url.link} LinkName={url.linkname} />
						)
					}
					{/* <Link Points={-100} VoteRecord={1} Name="Ani" Link="//www.google.com" LinkName="Google"/>
					<Link Points={20000} VoteRecord={0} Name="Ani2" Link="//stackoverflow.com" LinkName="StackOverflow" />
					<Link Points={30000} VoteRecord={-1} Name="Ani3" Link="//facebook.com" LinkName="Facebook" /> */}
				</div>
			</div>
		);
	}
}

export default ShowLinks;