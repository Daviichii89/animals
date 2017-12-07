import React from 'react'
import AnimalList from './AnimalList'
import AnimalForm from './AnimalForm'

class AnimalContainer extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			animals: [
			{id: 0, name: "Toby", breed: "dog", age: 5, weight: 10+"KG"},
			{id: 1, name: "Penny", breed: "cat", age: 3, weight: 5+"KG"}
			]
		}
		this.handleAddAnimal = this.handleAddAnimal.bind(this);
		this.handleDeleteAnimal = this.handleDeleteAnimal.bind(this);
		this.handleEditAnimal = this.handleEditAnimal.bind(this);
	}


	handleAddAnimal(animal){

		this.setState({animals:[
			...this.state.animals,
			{...animal, id: this.state.animals.length}
			]})
		}

	handleDeleteAnimal(animalId){
		this.setState({animals:
			this.state.animals.filter(animal => animal.id !== animalId)
			})
		}

	handleEditAnimal(animal){
		console.log("editar animal" + JSON.stringify(animal))
		
		//TODO añadir al animal edad y peso


	}


	render(){

		const {animals} = this.state


		return (
			<div>

				<AnimalForm handleAddAnimal={this.handleAddAnimal} />
				<AnimalList animals={animals} handleDeleteAnimal={this.handleDeleteAnimal} handleEditAnimal={this.handleEditAnimal} />	
			

			</div>


			)
	}

		



			
	
}


export default AnimalContainer