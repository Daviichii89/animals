import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Panel, Row, Col } from 'react-bootstrap'
import '../App.css'


class AnimalForm extends React.Component {

	constructor(props){
		super(props)
		this.state={name:'', breed:'', age:'', weight:''}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleInsertAnimal = this.handleInsertAnimal.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
        ReactDOM.findDOMNode(this.refs.name).value = "";
        ReactDOM.findDOMNode(this.refs.breed).value = "";
        ReactDOM.findDOMNode(this.refs.age).value = "";
        ReactDOM.findDOMNode(this.refs.weight).value = "";
    }

	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;


    this.setState({
      [name]: value,
      
    });

    
 	 
 	}

  	handleInsertAnimal(){
  		this.props.handleAddAnimal({name:this.state.name, breed:this.state.breed, age:this.state.age, weight:this.state.weight})
  		
  		

  	}
	





	render(){

		const {name, breed, age, weight} = this.state

		const formEmpty = name && breed && age && weight && name.length > 0 && breed.length > 0 && age.length > 0 && weight.length > 0

		return (

			<Row>
			<Col xs={6} md={4}>
			<Panel className="AnimalForm">
				<label> name
				<input type="text" value={this.state.name} name="name" ref="name" onChange={this.handleInputChange} />
				</label>
				<br /><br />
				<label> breed
				<input type="text" value={this.state.breed} name ="breed" ref="breed" onChange={this.handleInputChange} />
				</label>
				<br /><br />
				<label> age
				<input type="text" value={this.state.age} name ="age" ref="age" onChange={this.handleInputChange} />
				</label>
				<br /><br />
				<label> weight
				<input type="text" value={this.state.weight} name ="weight" ref="weight" onChange={this.handleInputChange} />
				</label>
				<br /><br />
				<Button bsStyle="success" onClick={this.handleInsertAnimal, this.handleClick}  disabled={!formEmpty}> Crear </Button>
			</Panel>
			</Col>
			</Row>



			)
	}
}


export default AnimalForm