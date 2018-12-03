import React, {Component} from 'react'
import {Button,Col,Row,Container, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import ShowTopic from './ShowTopic';

const block = {
   textAlign: 'center',
   fontFamily: 'Permanent Marker', 
   fontFamily: 'cursive',
     fontSize: '100px',
 }
 const room ={
   textAlign: 'center',
   margin: '10px' ,
   height : '100px' ,
   width : '200px' ,
 }
class Room extends Component {
    constructor(props){
        super(props);
        this.state = {
          modal: [false,false,false,false]
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle(room) {
        this.state.modal[room-1] = !this.state.modal[room-1]
        this.forceUpdate()
      }
      showModal(room){
          return(
        <Modal isOpen={this.state.modal[room-1]} toggle={() =>this.toggle(room)}>
            <ModalHeader toggle={() => this.toggle(room)}>Room {room}</ModalHeader>
            <ModalBody>
                <ShowTopic  roomT={room}/>
            </ModalBody>
        </Modal>
          )
      }
    render(){
        return (
            <Container> 
                <Row>
                    <Col>
                        <Button outline color="secondary" size = "lg"  style={room} onClick={() =>this.toggle(1)}>ROOM 1</Button>
                        {this.showModal(1)}
                    </Col>
                    <Col>
                        <Button outline color="success" size = "lg" style={room} onClick={() =>this.toggle(2)} >ROOM 2</Button>
                        {this.showModal(2)}
                    </Col>
                    <Col>
                        <Button outline color="info" size = "lg" style={room} onClick={() =>this.toggle(3)}>ROOM 3</Button>
                        {this.showModal(3)}
                    </Col>
                    <Col>
                        <Button outline color="warning" size = "lg" style={room} onClick={() =>this.toggle(4)}>ROOM 4</Button>
                        {this.showModal(4)}
                    </Col>
                </Row>
                <br></br>
            </Container>
        );
    }
}

export default Room;