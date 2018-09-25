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
                    <Link Name="Ani" Link="//www.google.com" LinkName="Google"/>
                    <Link Name="Ani2" Link="//stackoverflow.com" LinkName="StackOverFlow" />
                </div>
            </div>
        );
    }
}

export default ShowLinks;