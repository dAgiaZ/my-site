/**
 * Created by adrian on 23/08/2018.
 */
import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <div className="inner cover">
                <Glyphicon glyph="envelope" className="large-envelope" />
                <h3 class="cover-heading">Si quieres contactarme escr&iacute;beme a:</h3><br /><br />
                <a href="mailto:agd.vcl@gmail.com?Subject=Hola%20Adrian">agd.vcl@gmail.com</a><br />
                <a href="mailto:aidaf57.diaz@nauta.cu?Subject=Hola%20Adrian">aidaf57.diaz@nauta.cu</a>
            </div>

        );
    }
}

export default Contact;