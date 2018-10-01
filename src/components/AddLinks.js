import React, { Component } from 'react';

import './AddLinks.css';

class AddLinks extends Component {
	render() {
		return(
			<div className="showLinks container">
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default AddLinks;