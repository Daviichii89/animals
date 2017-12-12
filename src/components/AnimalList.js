import React from 'react'
import Animal from './Animal'
import {Panel, Alert, Col, Row} from 'react-bootstrap'

class AnimalList extends React.Component {



	render(){

		const {animals} = this.props;

		var rows = []

		animals ? animals.map((animal) => 
			rows.push(<Animal 
				{...animal}
				key={'animal'+ animal.animal_id}
				handleDeleteAnimal={this.props.handleDeleteAnimal}
				handleEditAnimal={this.props.handleEditAnimal} />)
		) : null

		return (
			
			
				<Panel>

				<p>Lista</p>
					<Row>
						{
							rows && rows.length <= 0 ? 
							<Alert bsStyle="warning"> No hay animales en la lista </Alert> : rows
						}
					</Row>
				</Panel>
				
			



			)
	}
}


export default AnimalList