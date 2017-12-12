import React from 'react'
import {Panel, Button, Col} from 'react-bootstrap'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
import {SingleDatePicker} from 'react-dates';
import moment from 'moment'
import PropTypes from 'prop-types'
import Galeria from './Galeria.js'



class Animal extends React.Component {

	constructor(props){
		super(props)

		this.state= {
			edit:false,
			...this.props
		}

		this.handleEditMode = this.handleEditMode.bind(this)
		this.handleEditAnimal = this.handleEditAnimal.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleDeleteAnimal = this.handleDeleteAnimal.bind(this)
	}

	handleInputChange(event) {
    	const target = event.target;
    	const value = target.type === 'checkbox' ? target.checked : target.value;
    	const name = target.name;

    	this.setState({
      		[name]: value
    });
    }

    //Erase animal

	handleDeleteAnimal(id){
		this.props.handleDeleteAnimal(id)
	}
	
	// edit animal
	handleEditAnimal(){
		
		this.props.handleEditAnimal({
			...this.state
		})

		this.handleEditMode()


	}

	handleEditMode(){
		this.setState({edit: !this.state.edit})
	}

	




	

	render(){

		const {name, breed, id, age, weight, arrived, decription, size, status, adopted, adopted_date, animal_id} = this.props
		const {edit} = this.state

		return (

			<Col xs={6} md={6} lg={4}>


			<Panel header={name} bsStyle="info">
      			
      			{ edit 
      				? 
      					<div> 
      						<h3> Editar Animal</h3>
      						<p> Name: <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} /></p>
      						<p> Breed: <input type="text" value={this.state.breed} name ="breed" onChange={this.handleInputChange} /></p>
      						<p> Age: <input type="text" value={this.state.age} name ="age" onChange={this.handleInputChange} /></p>
      						<p> Weight: <input type="text" value={this.state.weight} name ="weight" onChange={this.handleInputChange} /></p>
      						<p> Arrived: 	<SingleDatePicker
                  							firstDayOfWeek={1}
                  							hideKeyboardShortcutsPanel={true}
                  							date={moment(this.state.arrived)}
                  							numberOfMonths={1}
                  							focused={this.state.focused}
                  							onDateChange={date => this.setState({ arrived: date.toString() })}
                  							onFocusChange={({ focused }) => this.setState({ focused })}
                  							isOutsideRange={() => false}
                  							id="date_input"
                  							small="true"
                  							showDefaultInputIcon="true"
                  							noBorder="true"
                  							initial_Date="Moment{_}"
                  							displayFormat="DD/MM/YYYY" />
                  			</p>
      						<p> Description: <input type="text" value={this.state.description} name ="description" onChange={this.handleInputChange} /></p>
      						<p> Size: <select value={this.state.size} name ="size" onChange={this.handleInputChange}>
      							<option value="Small">Small</option>
      							<option value="Medium">Medium</option>
      							<option value="Large">Large</option>
      						</select></p>
      						<p> Adopted: <input type="text" value={this.state.adopted} name ="adopted" onChange={this.handleInputChange} /></p>
      						<p> Adopted date: <input type="text" value={this.state.adopted_date} name ="adopted_date" onChange={this.handleInputChange} /></p>
      	      				<Button bsStyle="success" onClick={this.handleEditAnimal} >Guardar</Button>

      					</div> 

      				: 
      					<div>
      						<Galeria />
      						<p>{breed}</p>
      						<p>{age}</p>
      						<p>{weight}</p>
      						<p>{moment(arrived).format("DD/MM/YYYY")}</p>
      						<p>{decription}</p>
      						<p>{size}</p>
      						<p>{status}</p>
      						<p>{adopted}</p>
      						<p>{adopted_date}</p>
      						<Button bsStyle="danger" onClick={() => this.handleDeleteAnimal(animal_id)} > Eliminar </Button>
      						{' '}
    						<Button bsStyle="warning" onClick={this.handleEditAnimal} >Editar</Button>
      					</div>}
     

      		
    		</Panel>
			</Col>
				



			)
	}
}

	Animal.propTypes = {

		name: PropTypes.string,
		breed: PropTypes.string,
		id: PropTypes.number,
		age: PropTypes.number,
		weight: PropTypes.string,
		arrived: PropTypes.date,
		decription: PropTypes.string,
		size: PropTypes.string,
		status: PropTypes.boolean,
		adopted: PropTypes.boolean,
		adopted_date: PropTypes.date
	};

 
export default Animal