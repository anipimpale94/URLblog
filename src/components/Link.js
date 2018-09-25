import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import './Link.css';


class Link extends Component {
	render() {
		let score = this.props.Points;
		let scoreString = ""
		if(score > 0){
			scoreString = "+" + this.props.Points.toString()
		}
		else scoreString = this.props.Points.toString()
		let color = 'black'
		if(this.props.VoteRecord > 0) {
			color = 'green'
		}
		if(this.props.VoteRecord < 0) {
			color = 'red'
		}

		return(
			<div className="showLink">
				<div className="pointsDisplay">
					{scoreString}
				</div>
				<div className="voteStatus">
					<FontAwesomeIcon icon={faThumbsUp} style={{ color: color}}/>
					<br/>
					<FontAwesomeIcon icon={faThumbsDown} />
				</div>
			
				<div className="linkInfo">
					<h2>{this.props.Name}</h2>
					<a className="mainLink" onClick={()=> window.open("https://" + this.props.Link, "_blank")}>
						<p className="linkWrap">
							{this.props.LinkName}		
						</p>
						<p className="linkIcon">
							<FontAwesomeIcon icon={faLink} />
						</p> 
					</a>
				</div>
				
			</div>
		);
	}
}

export default Link;