import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import './Link.css';


class Link extends Component {

	constructor(props) {
		super(props);
		this.state = props
	}

	render() {
		return(
			<div className="showLink">
				<div id="voteStatus">

				</div>
				<div id="linkInfo">
					<h2>{this.state.Name}</h2>
					<p>
						<a href="#" onClick={()=> window.open("https://" + this.state.Link, "_blank")}>
							{this.state.LinkName}
							<span className="linkIcon">
								<FontAwesomeIcon icon={faLink} />
							</span>
							
						</a>
					</p>
				</div>
				
			</div>
		);
	}
}

export default Link;