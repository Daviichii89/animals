import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Panel, Row, Col } from 'react-bootstrap'
import '../App.css'


class ContactForm extends React.Component {

	constructor(props){
		super(props)
		this.state={name:'', lastname:'', type:'Small'}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleInsertContact = this.handleInsertContact.bind(this)
		
	}

	handleClearForm () {
		this.setState({
  			name: '', lastname: ''
  		})


	}
	    


	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value

    });

 	 
 	}

  	handleInsertContact(){
  		this.props.handleAddContact({name:this.state.name, lastname:this.state.lastname, type:this.state.type})
  		
  		this.setState({
  			name: '', lastname: '', type: ''
  		})

  		
  	}
	





	render(){

		const {name, lastname} = this.state

		const formEmpty = name && lastname && name.length > 0 && lastname.length > 0 
		
		return (


			<Row>
			<Col xs={12} md={6} mdOffset={2}>
			<Panel className="ContactForm">
				<label> name
				<input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} />
				</label>
				<br /><br />
				<label> lastname
				<input type="text" value={this.state.lastname} name ="lastname" onChange={this.handleInputChange} />
				</label>
				<br /><br />
				<label> type
				<select value={this.state.type} name="type" onChange={this.handleInputChange}>

					<option value="Adopt">Adopt</option>
					<option value="Volunteer">Volunteer</option>
					<option value="Employer">Employer</option>
					<option value="Other">Other</option>

				</select>
				</label>
				<br /><br />
				<Button bsStyle="success" onClick={this.handleInsertContact} disabled={!formEmpty}> Crear </Button>
				<Button bsStyle="warning" onClick={this.handleClearForm} disabled={!formEmpty}> Limpiar </Button>
			</Panel>
			</Col>
			</Row>



			)
	}

}


export default ContactForm