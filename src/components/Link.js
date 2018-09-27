import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import './Link.css';


class Link extends Component {
	render() {
		let score = this.props.Points;
		let scoreString = ""
		let scoreColor = 'black'
		if(score > 0){
			scoreString = "+" + this.props.Points.toString()
			scoreColor = 'green'
		}
		else {
			scoreString = this.props.Points.toString()
			if(score < 0) {			
				scoreColor = 'red'
			}
		}
		let thumbColor1 = 'black'
		let thumbColor2 = 'black'
		if(this.props.VoteRecord > 0) {
			thumbColor1 = 'green'
		}
		if(this.props.VoteRecord < 0) {
			thumbColor2 = 'red'
		}

		return(
			<div className="showLink">
				<div className="pointsDisplay" style={{ color: scoreColor}}>
					{scoreString}
				</div>
				<div className="voteStatus">
					<FontAwesomeIcon icon={faThumbsUp} style={{ color: thumbColor1}} />
					<br/>
					<FontAwesomeIcon icon={faThumbsDown} style={{ color: thumbColor2}} />
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