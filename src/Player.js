import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Card } from 'react-bootstrap' ; 

class Player extends React.Component {

     constructor(props) {
        super (props);
        
     }
  
     handleButton = (myName)  =>  alert( `My Name is : ${myName}`);
     

 render(){
 
  return (
    <div>
    <Card style={{ width: '15rem' ,height:"100%", margin:'15px' }}>
      <Card.Img variant="top" src= { this.props.urlImage} alt={"Image of " }   />
      <Card.Body>
        <Card.Title> Name: { this.props.name }         </Card.Title>
        <Card.Text>  Age : { this.props.age  }         </Card.Text>
        <Card.Text>  Nationality: { this.props.nationality }  </Card.Text>
        <Card.Text>  Team :{ this.props.team }         </Card.Text>
        <Card.Text> Jersey : { this.props.jerseyNumber }  </Card.Text>
        

        <Button onClick={() => this.handleButton(`${this.props.name}`)} variante="primary" > Clic Here </Button>                   

      </Card.Body>
    </Card>

    </div>
  )
 }
} 

// Les valeurs par defaut 
Player.defaultProps  = {

  urlImage : "./images/Inconnu.jpeg" ,
  name     : "Inconnu"               ,
  age      : ""   ,
  nationality :"Inconnue" ,
  team        : "Inconnu" ,
  jerseyNumber: 777

}




export default Player ;
