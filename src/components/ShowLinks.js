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
				</div>
			</div>
		);
	}
}

export default ShowLinks;