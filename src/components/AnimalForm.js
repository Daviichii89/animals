import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Panel, Row, Col } from 'react-bootstrap'
import '../App.css'


class AnimalForm extends React.Component {

	constructor(props){
		super(props)
		this.state={name:'', breed:'', age:'', weight:'', size:'Small'}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleInsertAnimal = this.handleInsertAnimal.bind(this)
		this.handleClearForm = this.handleClearForm.bind(this)
		
	}

	    


	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const breed = target.breed;
    const age = target.age;
    const weight = target.weight;


    this.setState({
      [name]: value,

    });

 	 
 	}

  	handleInsertAnimal(){
  		this.props.handleAddAnimal({name:this.state.name, breed:this.state.breed, age:this.state.age, weight:this.state.weight, size:this.state.size})
  		
  		this.setState({
  			name: '', breed: '', age: '', weight: '', size: ''
  		})

  		
  	}

	handleClearForm () {
		this.setState({
  			name: '', breed: '', age: '', weight: ''
  		})


	}



	





	render(){

		const {name, breed, age, weight} = this.state

		const formEmpty = name && breed && age && weight && name.length > 0 && breed.length > 0 && age.length > 0 && weight.length > 0
		
		return (


			<Row>
			<Col xs={12} md={6} mdOffset={2}>
			<Panel className="AnimalForm">
				<label> name
				<input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} />
				</label>
				<br /><br />
				<label> breed
				<input type="text" value={this.state.breed} name ="breed" onChange={this.handleInputChange} />
				</label>
				<br /><br />
				<label> age
				<input type="text" value={this.state.age} name ="age" onChange={this.handleInputChange} />
				</label>
				<br /><br />
				<label> weight
				<input type="text" value={this.state.weight} name ="weight" onChange={this.handleInputChange} />
				</label>
				<br /><br />
				<label> size
				<select value={this.state.size} name="size" onChange={this.handleInputChange}>

					<option value="Small">Small</option>
					<option value="Medium">Medium</option>
					<option value="Large">Large</option>

				</select>
				</label>
				<br /><br />
				<Button bsStyle="success" onClick={this.handleInsertAnimal} disabled={!formEmpty}> Crear </Button>
				<Button bsStyle="warning" onClick={this.handleClearForm}> Limpiar </Button>
			</Panel>
			</Col>
			</Row>



			)
	}

}


export default AnimalForm