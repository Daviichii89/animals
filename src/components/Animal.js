import React from 'react'
import {Panel, Button} from 'react-bootstrap'

class Animal extends React.Component {

	constructor(props){
		super(props)

		this.state= {
			edit:false
		}

		this.handleEditMode = this.handleEditMode.bind(this)
		this.handleEditAnimal = this.handleEditAnimal.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange(event) {
    	const target = event.target;
    	const value = target.type === 'checkbox' ? target.checked : target.value;
    	const name = target.name;

    	this.setState({
      		[name]: value
    });
    }


	handleDeleteAnimal(id){
		this.props.handleDeleteAnimal(id)
	}
	
	handleEditAnimal(){
		
		this.props.handleEditAnimal({
			name: this.state.name,
			breed: this.state.breed,
			age: this.state.age,
			weight: this.state.weight
		})


	}

	handleEditMode(){
		this.setState({edit: !this.state.edit})
	}

	render(){

		const {name, breed, id, age, weight} = this.props
		const {edit} = this.state

		return (
			<Panel header={name} bsStyle="info">
      			
      			{ edit 
      				? 
      					<div> 
      						<h3> Editar Animal</h3>
      						<p> Name: <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} /></p>
      						<p> Breed: <input type="text" value={this.state.breed} name ="breed" onChange={this.handleInputChange} /></p>
      						<p> Age: <input type="text" value={this.state.age} name ="age" onChange={this.handleInputChange} /></p>
      						<p> Weight: <input type="text" value={this.state.weight} name ="weight" onChange={this.handleInputChange} /></p>
      	      				<Button bsStyle="success" onClick={this.handleEditAnimal} >Guardar</Button>

      					</div> 

      				: 
      					<div>
      						<p>{breed}</p>
      						<p>{age}</p>
      						<p>{weight}</p>
      						<Button bsStyle="danger" onClick={() => this.handleDeleteAnimal(id)} > Eliminar </Button>
      						{' '}
    						<Button bsStyle="warning" onClick={this.handleEditMode} >Editar</Button>
      					</div>}
     

      		
    		</Panel>
			
				



			)
	}
}

 
export default Animal