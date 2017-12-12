import React from 'react'
import AnimalList from './AnimalList'
import AnimalForm from './AnimalForm'
import {Button} from 'react-bootstrap'

 
class AnimalContainer extends React.Component {

	constructor(props){
		super(props)
		this.handleAddAnimal = this.handleAddAnimal.bind(this);
		this.handleDeleteAnimal = this.handleDeleteAnimal.bind(this);
		this.handleEditAnimal = this.handleEditAnimal.bind(this);
		this.handleOpenButtonAdd = this.handleOpenButtonAdd.bind(this);
		this.handleFormMode = this.handleFormMode.bind(this);
	}


	componentWillMount () {


		//TODO get animals from database

			this.state = {
				animals: [
					{"animal_id":"23","name":"Toby","age":5,"breed":"Perro","weight":"22KG","arrived":"2017-07-19","description":"asdsa","size":"Large","status":"1","adopted":"0","adopted_date":null},
					{"animal_id":"22","name":"Penny","age":3,"breed":"Gato","weight":"5KG","arrived":"2017-07-08","description":"asd","size":"Medium","status":"1","adopted":"0","adopted_date":null},
					{"animal_id":"21","name":"Symba","age":8,"breed":"Perro","weight":"20KG","arrived":"2017-07-26","description":"asdasd","size":"Large","status":"1","adopted":"0","adopted_date":"2017-08-22 00:00:00"},
					{"animal_id":"26","name":"Kovu","age":1,"breed":"Gato","weight":"5KG","arrived":"2017-08-22","description":"A","size":"Large","status":"1","adopted":"0","adopted_date":null}
				],
				showAnimals: false,
				showForm: false
			}

	}


	componentDidMount() {
		const _this = this
		
		// funcion para carga pagina para mostrar todo junto
		setTimeout( function () {
			_this.setState({showAnimals: true})
		

		}, 3000);



		
	}






	handleAddAnimal(animal){

		// TODO create animal on database

		this.setState({animals:[
			...this.state.animals,
			{...animal, animal_id: this.state.animals.length}
			]})
		
			
	}

	handleDeleteAnimal(animalId){

		// TODO delete animal from database

		this.setState({animals:
			this.state.animals.filter(animal => animal.animal_id !== animalId)
			})
		}

	handleEditAnimal(animal){


		// TODO edit animal on database

		var foundIndex = this.state.animals.findIndex(x => x.animal_id == animal.animal_id);
		var animals = this.state.animals;
		animals[foundIndex] = animal;

		this.setState({animals: animals})

	}

	handleOpenButtonAdd() {
		


		this.handleFormMode()

	
	}

	handleFormMode(){

		this.setState({showForm: !this.state.showForm})
	}





	render(){

		const {animals, showAnimals, showForm} = this.state
		

		return (
			<div>


				{ showForm 

				?
				<div>
				
				<Button bsStyle="danger" onClick={this.handleOpenButtonAdd} >Cancelar</Button>
				<AnimalForm handleAddAnimal={this.handleAddAnimal} />
				
				</div>

				: <Button bsStyle="primary" type="submit" onClick={this.handleOpenButtonAdd}> + Añadir </Button>

				}

				{ showAnimals == true ?  
				<AnimalList animals={animals} 
				handleDeleteAnimal={this.handleDeleteAnimal} 
				handleEditAnimal={this.handleEditAnimal} />	
				: <p> Buscando animales... </p> }

			</div>


			)
	}

		



			
	
}


export default AnimalContainer