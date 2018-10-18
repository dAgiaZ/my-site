/**
 * Created by comercial on 23/08/2018.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLink extends Component {

    render () {
        return (
            <li className={this.props.isActive ? "active": ""} >
                <Link to={this.props.path} onClick={() => this.props.onClick()}>{this.props.text}</Link>
            </li>
        );
    }
}

export default  NavLink;