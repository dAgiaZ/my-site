/**
 * Created by adrian on 20/08/2018.
 */
import React, { Component } from 'react';
import NavLink from './navLink.js';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {path: "/", text: "About me", isActive: true},
                {path: "/portfolio", text: "Portfolio", isActive: false},
                {path: "/contact", text: "Contact", isActive: false},
            ]
        }
    }

    handleClick(i) {
        //const links = this.state.links.slice();
        const links = [...this.state.links];
        for (const j in links) {
            links[j].isActive = parseInt(i) === parseInt(j) ;
        }
        this.setState({links: links});
    }

    render() {
        return (
            <div className="masthead clearfix">
                <div className="inner">
                    <h2 className="masthead-brand">Adri&aacute;n Guti&eacute;rrez D&iacute;az</h2>
                    <nav>
                        <ul className="nav masthead-nav">
                            {this.state.links.map((link, i) =>
                                <NavLink
                                    path={link.path}
                                    text={link.text}
                                    isActive={link.isActive}
                                    key={link.path}
                                    onClick={() => this.handleClick(i)}
                                 />
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;