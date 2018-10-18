/**
 * Created by adrian on 20/08/2018.
 */
import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
                <div className="inner cover">
                    <Image src="foto.jpg" circle />
                    <h3 className="cover-heading">Hi, I'm Adri&aacute;n.</h3>
                    <p className="lead">Fullstack Developer. Javascript & PHP's fan # 1.<br /> Desarrollador ocasional de aplicaciones Delphi y Visual Foxpro. Adicto a los retos, el cafe y la programacion de madrugada.</p>
                    <p className="lead">
                        <Button href="docs/cv_eng_Adrian_Gutierrez1.pdf"  target="blank" bsStyle="default" bsSize="large">Ver mi C.V.</Button>
                    </p>
                </div>

        );
    }
}

export default Home;