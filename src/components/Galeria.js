import React from 'react'
import {Carousel} from 'react-bootstrap'


class Galeria extends React.Component{

	constructor(props){

    super(props)
    this.state= {
      index: 0,
      direction: null
    }

    this.handleSelect = this.handleSelect.bind(this)


  }
  

  handleSelect(selectedIndex, e) {

    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://www.anipedia.net/imagenes/donde-viven-los-gatos.jpg" />
          <Carousel.Caption>
            <h3>Gato</h3>
            <p>Fan number 1 de Garfield</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://www.anipedia.net/imagenes/caracteristicas-generales-de-los-perros.jpg" />
          <Carousel.Caption>
            <h3>Perro</h3>
            <p>Que pasa!! nos fumamos algo??</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
};

export default Galeria



