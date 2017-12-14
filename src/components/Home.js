import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class Home extends React.Component {

	render(){
		return(

			<Jumbotron>
    			<h1>Pet´s App</h1>
    			<p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    			<p><Button bsStyle="primary"><Link to={'animals'}>Iniciar consulta</Link></Button></p>
  				</Jumbotron>
			)
	}
}
export default Home  