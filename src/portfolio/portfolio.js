/**
 * Created by adrian on 23/08/2018.
 */
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


class Portfolio extends Component {
    constructor(props, context) {
        super(props, context);

/*        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null
        };*/
    }

/*    handleSelect(selectedIndex, e) {
        alert(`selected=${selectedIndex}, direction=${e.direction}`);
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }*/

    render() {
        //const { index, direction } = this.state;

        return (
            <div class="inner cover">
                <Carousel className="carousel">
                    <Carousel.Item className="carousel-item">
                        <img alt="900x500" src="images/acs.jpg" />
                        <Carousel.Caption className="carousel-caption">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <img alt="900x500" src="images/admipad.jpg" />
                        <Carousel.Caption className="carousel-caption">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <img alt="900x500" src="images/casograve.jpg" />
                        <Carousel.Caption className="carousel-caption">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Portfolio;