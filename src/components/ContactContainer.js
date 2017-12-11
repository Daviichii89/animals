import React from 'react'
import ContactList from './ContactList'
import ContactForm from './ContactForm'
import {Button} from 'react-bootstrap'


class ContactContainer extends React.Component {

	constructor(props){
		super(props)
		this.handleAddContact = this.handleAddContact.bind(this);
		this.handleDeleteContact = this.handleDeleteContact.bind(this);
		this.handleEditContact = this.handleEditContact.bind(this);
		this.handleOpenButtonAdd = this.handleOpenButtonAdd.bind(this);
		this.handleFormMode = this.handleFormMode.bind(this);
	
	}


	componentWillMount () {


		

			this.state = {
				contacts: [
					{"contact_id":"23","name":"Danielo","lastname":"Fair","type":"Volunteer"}
				],
				showContacts: false,
				showForm: false
			}

	}


	componentDidMount() {
		const _this = this
		
		// funcion para carga pagina para mostrar todo junto
		setTimeout( function () {
			_this.setState({showContacts: true})
		

		}, 3000);
		
	}

	handleAddContact(contact){

		// TODO create animal on database

		this.setState({contacts:[
			...this.state.contacts,
			{...contact, contact_id: this.state.contacts.length}
			]})
		
			
	}

	handleDeleteContact(contactId){

		// TODO delete animal from database

		this.setState({contacts:
			this.state.contacts.filter(contact => contact.contact_id !== contactId)
			})
		}

	handleEditContact(contact){


		// TODO edit animal on database

		var foundIndex = this.state.contacts.findIndex(x => x.contact_id == contact.contact_id);
		var contacts = this.state.contacts;
		contacts[foundIndex] = contact;

		this.setState({animals: contacts})

	}

	handleOpenButtonAdd() {
		
		this.props.handleButtonAdd

		this.handleFormMode()

	
	}

	handleFormMode(){

		this.setState({showForm: !this.state.showForm})
	}	


	render(){

		const {contacts, showContacts, showForm} = this.state


		return (
			<div>

				{ showForm 

				?
				<div>

					<Button bsStyle="danger" onClick={this.handleOpenButtonAdd}> Cancelar </Button>	
					<ContactForm handleAddContact={this.handleAddContact} />
					
				</div>
				: <Button bsStyle="primary" type="submit" onClick={this.handleOpenButtonAdd}> + Añadir </Button>

				}

				{ showContacts == true 
					?  <ContactList contacts={contacts} 
						handleDeleteContact={this.handleDeleteContact} 
						handleEditContact={this.handleEditContact} />	
					: <p> Buscando contactos... </p> }

			</div>


			)
	}

		



			
	
}


export default ContactContainer