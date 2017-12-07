import React from 'react'
import Animal from './Animal'
import {Panel, Alert} from 'react-bootstrap'

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
			
				<Panel>
					{
						rows && rows.length <= 0 ? 
						<Alert bsStyle="warning"> No hay animales en la lista </Alert> : rows
					}

				</Panel>
			</div>



			)
	}
}


export default AnimalList