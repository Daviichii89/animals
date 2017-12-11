import React from 'react'
import {Panel, Button, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'


class Contact extends React.Component {

		constructor(props){
		super(props)

		this.state= {
			edit:false,
			...this.props
		}

		this.handleEditMode = this.handleEditMode.bind(this)
		this.handleEditContact = this.handleEditContact.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleDeleteContact = this.handleDeleteContact.bind(this)
	}

	handleInputChange(event) {
    	const target = event.target;
    	const value = target.type === 'checkbox' ? target.checked : target.value;
    	const name = target.name;

    	this.setState({
      		[name]: value
    });
    }

    //Erase contact

	handleDeleteContact(id){
		this.props.handleDeleteContact(id)
	}
	
	// edit contact
	handleEditContact(){
		
		this.props.handleEditContact({
			...this.state
		})

		this.handleEditMode()


	}

	handleEditMode(){
		this.setState({edit: !this.state.edit})
	}




	

	render(){

		const {name, lastname, type} = this.props
		const {edit} = this.state

		return (

			<Col xs={6} md={6} lg={4}>

			<Panel header={name} bsStyle="info">
      			
      			{ edit 
      				? 
      					<div> 
      						<h3> Editar Contacto</h3>
      						<p> Name: <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} /></p>
      						<p> Lastname: <input type="text" value={this.state.lastname} name ="lastname" onChange={this.handleInputChange} /></p>
      						<p> Type: 
      						<select value={this.state.type} name ="type" onChange={this.handleInputChange}>
      							<option value="Adopt">Adopt</option>
      							<option value="Volunteer">Volunteer</option>
      							<option value="Employer">Employer</option>
      							<option value="Other">Other</option>
      						</select>
      						</p>
      						<Button bsStyle="success" onClick={this.handleEditContact} >Guardar</Button>

      					</div> 

      				: 
      					<div>
      						<p>{lastname}</p>
      						<p>{type}</p>  		
      						<Button bsStyle="danger" onClick={() => this.handleDeleteContact()} > Eliminar </Button>
      						{' '}
    						<Button bsStyle="warning" onClick={this.handleEditContact} >Editar</Button>
      					</div>}
     

      		
    		</Panel>
			</Col>
				



			)
	}
}

	Contact.propTypes = {

		name: PropTypes.string,
		lastname: PropTypes.string,
		type: PropTypes.string,
		age: PropTypes.number

	};

 
export default Contact
