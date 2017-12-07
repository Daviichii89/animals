import React from 'react'
import Animal from './Animal'
import {Panel, Alert, Col, Row} from 'react-bootstrap'

class AnimalList extends React.Component {



	render(){

		const {animals} = this.props;

		var rows = []

		animals ? animals.map((animal) => 
			rows.push(<Animal 
				name={animal.name} 
				breed={animal.breed}
				age={animal.age}
				weight={animal.weight}
				key={"a"+animal.id}
				id={animal.id}
				handleDeleteAnimal={this.props.handleDeleteAnimal}
				handleEditAnimal={this.props.handleEditAnimal}

				/>)
		) : null

		return (
			
			<div>
				<p>Lista</p>
				<Row>
				<Col xs={6} md={4}>
				<Panel>
					{
						rows && rows.length <= 0 ? 
						<Alert bsStyle="warning"> No hay animales en la lista </Alert> : rows
					}

				</Panel>
				</Col>
				</Row>
			</div>



			)
	}
}


export default AnimalList