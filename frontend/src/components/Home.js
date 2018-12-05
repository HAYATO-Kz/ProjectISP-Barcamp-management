import React, {Component} from 'react'
import {Button,Col,Row,Container} from 'reactstrap'
import Room from './Room'
// import {Col,Row,Container,Bu}

const block = {
   textAlign: 'center',
   fontFamily: 'Permanent Marker', 
   fontFamily: 'cursive',
     fontSize: '100px',
     color : 'white'
 }
 const room ={
   textAlign: 'center',
   margin: '10px' ,
   height : '100px' ,
   width : '200px' ,
 }

 const page = {
    height : "980px",
 }

 const page2 = {
     backgroundColor : "#09090A"
 }

class Home extends Component {
    render(){
        return (
            <div style={page2}>
                <Container style={page}>
                <Row>
                    <Col id ="bar" style = {block}>
                    BARCAMP
                    </Col>
                </Row>    
                <Room/>
                <br/>
                <Row>
                    <Button outline color="primary" onClick={() => this.props.history.push('/login')} block>Sign in</Button>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Home;