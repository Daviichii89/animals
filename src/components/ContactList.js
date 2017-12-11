import React from 'react'
import Contact from './Contact'
import {Panel, Alert, Col, Row} from 'react-bootstrap'

class ContactList extends React.Component {



	render(){

		const {contacts, contact_id} = this.props;

		var rows = []

		contacts ? contacts.map((contact) => 
			rows.push(<Contact 
				{...contact}
				key={"contact"+ contact_id}
				handleDeleteContact={this.props.handleDeleteContact}
				handleEditContact={this.props.handleEditContact} />)
		) : null

		return (
			
			
				<Panel>

				<p>Lista</p>
					<Row>
						{
							rows && rows.length <= 0 ? 
							<Alert bsStyle="warning"> No hay contactos en la lista </Alert> : rows
						}
					</Row>
				</Panel>
				
			



			)
	}
}


export default ContactList