import React, { Component } from 'react';
import firebase from 'firebase'
import TimeKeeper from 'react-timekeeper';
import Room from './Room';
import {Container, Modal,ModalHeader, ModalBody, ModalFooter, ButtonGroup, Button,Collapse, Navbar,
        NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown,DropdownToggle, DropdownMenu,
        DropdownItem,Popover, PopoverBody, InputGroup, InputGroupAddon, Input } from 'reactstrap';

const mid = {
  textAlign : 'center'
}

const topicButton = {
  width : '750px',
  height : '50px',
  marginTop : '25px',
  marginRight : '40px',
  marginLeft : '40px'
}

const Logo = {
    fontFamily: 'cursive',
    fontSize: '60px',
    color: 'white',
    margin: '30px'
};

const HeaderTap = {
    fontFamily: 'sans-serif'
};

const LogoBar = {
    backgroundColor: 'black',
    display: 'flex',
    height: '150px'
}; 

const ButtonTap = {
    padding: '5px',
    textAlign: 'right',
    backgroundColor: '#F5F5F5'
};

const popoverBody = {
    backgroundColor: '#F5F5F5'
};

const StartTimeButton = {
    marginRight: '5px'
};

class Speaker extends Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
    this.change = this.change.bind(this);
    this.addNewTopic = this.addNewTopic.bind(this);
    this.modalToggle = this.modalToggle.bind(this);
    this.Popovertoggle = this.Popovertoggle.bind(this);
    this.handleDesChange = this.handleDesChange.bind(this);
    this.modalRoomToggle = this.modalRoomToggle.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleTopicChange = this.handleTopicChange.bind(this);
    this.handleSpeakerChange = this.handleSpeakerChange.bind(this)
    this.toggleStopTimekeeper = this.toggleStopTimekeeper.bind(this);
    this.handleStopTimeChange = this.handleStopTimeChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.toggleStartTimekeeper = this.toggleStartTimekeeper.bind(this);
    this.state = {
      modal: [] ,
      allTopic : [] ,
      name : "",
      username : "user",
      topic : "",
<<<<<<< HEAD
      stopTime: '6:50',
      startTime: '6:20',
=======
      stopTime: '9:30',
      startTime: '9:00',
>>>>>>> master
      description : "",
      go : "Sign out",
      room : 0 ,
      vote : 0 ,
      start: true,
      isOpen: false,
      modalRoom : false,
      popoverOpen: false,
      displayStartTimepicker: false,
      displayStopTimepicker2: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  Popovertoggle(){
    this.setState({
        popoverOpen: !this.state.popoverOpen
    });
  }

  logout() {
    firebase.auth().signOut();
    this.props.history.push('/');
  }

  handleStartTimeChange(newTime){
    this.setState({ startTime: newTime.formatted24})
  }

  toggleStartTimekeeper(val){
    this.setState({displayStartTimepicker: val})
  }

  handleStopTimeChange(newTime){
    this.setState({ stopTime: newTime.formatted24})
  }

  toggleStopTimekeeper(val){
    this.setState({displayStopTimepicker: val})
  }

  handleTopicChange(e) {
    this.setState({ topic: e.target.value });
  }

  handleSpeakerChange(e) {
    this.setState({ name: e.target.value });
  }

  handleDesChange(e) {
    this.setState({ description: e.target.value });
  }

  modalToggle(id) {
    this.state.modal[id] = !this.state.modal[id]
    this.forceUpdate()
  }

  modalRoomToggle() {
    this.setState({
      modalRoom: !this.state.modalRoom
    });
  }

  addNewTopic(){
    var to = this.state.topic
    var des = this.state.description
    var stime = this.state.startTime
    var etime = this.state.stopTime
    var speak = this.state.name
    var r = this.state.room
    var v = this.state.vote
    if(to === ""){
        alert("Please fill topic's title")
        return
      }
    if(des === ""){
      alert("Please fill topic's description")
      return
    }
    if(speak === ""){
      alert("Please fill speaker's name")
      return
    }
    
    var st = stime.split(':')
    var et = etime.split(':')
    var hrS = parseInt(st[0])
    var mnS = parseInt(st[1])
    var hrE = parseInt(et[0])
    var mnE = parseInt(et[1])
    if(hrS>hrE){
      alert("End time should not be before start time.")
      return
    }
    if(hrS===hrE){
      if(mnS>mnE){
        alert("End time should not be before start time.")
        return
      }
      else if (mnS===mnE){
        alert("'0 sec' Really!!!!")
        return
      }
      else if (mnE-mnS < 15){
        alert("You should more than 15 min.")
        return
      }
    }

    const sendData = { 'topic_name' : to, 'description':des, 'start_time':stime,
                       'end_time':etime, 'speaker':speak, 'room':r, 'vote':v }
    $.ajax({
      dataType: 'json',
      // url: 'https://barcamp-management.herokuapp.com/api/topic/',
      url: 'http://localhost:3000/api/topic/',
      type: 'POST',
      data: JSON.stringify(sendData),
      contentType:'application/json',
    })
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
    window.location.reload();
  }

  change(){
    if(this.state.start == true){
      for(var i = 0 ; i <= this.state.allTopic.length;i++){
        var newArray = this.state.modal.slice();    
        newArray.push({id: false});   
        this.setState({modal:newArray})
      }
    this.setState({start:false})
    }
  }

  componentDidMount() {
    // fetch("https://barcamp-management.herokuapp.com/api/topic/")
    fetch("http://localhost:3000/api/topic/")
      .then(response => {
        if (response.status !== 200) {
          return console.log('error')
        }
        return response.json();
      })
      .then(data => this.setState({ allTopic: data }));
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // Signed in
        const name = JSON.stringify(user, null, 2);
        const nameE =  JSON.parse(name);
        this.setState({username:nameE.displayName})
        this.setState({go:"Sign out"})
      } else {
        // Signed out
        this.setState({username:"no user"})
        this.setState({go:"Sign in"})
      }
    }.bind(this))
  }
  render() {
    return (
      <div>
        <div>
          <Navbar color="light" light expand="md" style={HeaderTap} >
            <NavbarBrand id ="header">SPEAKER</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle id='username' nav caret>
                  {this.state.username}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem id="attendee" onClick={() => this.props.history.push('/attendee')}>Attendee</DropdownItem>
                    <DropdownItem onClick={this.modalRoomToggle}>Room</DropdownItem>
                      <Modal isOpen={this.state.modalRoom} toggle={this.modalRoomToggle} >
                        <ModalHeader toggle={this.modalRoomToggle} charCode= "x">Room</ModalHeader>
                        <ModalBody style={mid}>
                          <Room/>
                        </ModalBody>                  
                      </Modal>
                    <DropdownItem divider />
                    <DropdownItem id="out" style={{color: 'red'}} onClick={this.logout}>{this.state.go}</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        <div style={LogoBar}>
          <h1 style={Logo}>Barcamp</h1>
        </div>

        <div style={ButtonTap} >
          <Button color="secondary" id="Popover1" onClick ={this.Popovertoggle}>Add new topic</Button>  
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
              <PopoverBody style={popoverBody}>
                <InputGroup >
                  <InputGroupAddon addonType="prepend">Topic</InputGroupAddon>
                  <Input id="itopic" placeholder="topic" onChange = {this.handleTopicChange} />
                </InputGroup>
                <br/>
                <InputGroup >
                  <InputGroupAddon addonType="prepend">Speaker</InputGroupAddon>
                  <Input id = 'ispeaker'placeholder="name" onChange = {this.handleSpeakerChange} />
                </InputGroup>
                <br/>
                <Input id='ides' type="textarea" name="text" id="exampleText" placeholder="Description..." onChange = {this.handleDesChange}/>
                <br/>
                <ButtonGroup>
                  <Button style={StartTimeButton} onClick={()=>this.toggleStartTimekeeper(true)}>start : {this.state.startTime}</Button>
                  <Button onClick={()=>this.toggleStopTimekeeper(true)}>end : {this.state.stopTime}</Button>
                </ButtonGroup>
                <div id="startTime">
                  <br/>
                  {this.state.displayStartTimepicker ?
                    <TimeKeeper
                      time={this.state.startTime}
                      onChange={this.handleStartTimeChange}
                      onDoneClick={() => {
                        this.toggleStartTimekeeper(false)
                      }}
                      switchToMinuteOnHourSelect={true}
                    />
                    :
                    false
                  }
                </div>
                <div id="stopTime">
                  <br/>
                  {this.state.displayStopTimepicker ?
                  <TimeKeeper
                    time={this.state.stopTime}
                    onChange={this.handleStopTimeChange}
                    onDoneClick={() => {
                      this.toggleStopTimekeeper(false)
                    }}
                    switchToMinuteOnHourSelect={true}
                  />
                  :
                  false
                  }
                </div>
              <Button id="add" onClick ={this.addNewTopic} block>ADD</Button>
            </PopoverBody>
          </Popover>
        </div>
        <Container id="topic_all" style = {mid}>
          {this.state.allTopic.map((topic, index) => (
            <div>
              <Button  id={topic.topic_name} style = {topicButton} outline color="danger" onClick={() =>this.modalToggle(index+1)}>{topic.topic_name}</Button>
              <Modal isOpen={this.state.modal[index+1]} toggle={() =>this.modalToggle(index+1)} >
                <ModalHeader id={topic.topic_name} toggle={() =>this.modalToggle(index+1)} charCode= "x">{topic.topic_name}</ModalHeader>
                <ModalBody>
                  {topic.description}
                  <br/>
                  {topic.start_time} - {topic.end_time}
                </ModalBody>
                <ModalFooter>by {topic.speaker}</ModalFooter>
              </Modal>
            </div>
          ))}
          {this.change()}
        </Container>
      </div>
    );
  }
}

export default Speaker ;