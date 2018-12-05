import React, {Component} from 'react'
import {DropdownItem} from 'reactstrap'
class ShowTopic extends Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.pickTopic = this.pickTopic.bind(this);

        this.state= {
            allTopic: [],
            roomTopic: []
        }
    }
    pickTopic(){
        var newArray = this.state.roomTopic.slice();    
        this.state.allTopic.map((topic,index) => {
            if(topic.room == this.props.roomT) newArray.push(topic);   
        })
        this.setState({roomTopic:newArray});
    }


    componentDidMount(){
        fetch("https://barcamp-management.herokuapp.com/api/topic/")
        // fetch("http://localhost:3000/api/topic/")
            .then(response => {
                if (response.status !== 200) {
                    return console.log('error')
                }
                return response.json();
            })
            .then(data => {this.setState({ allTopic: data }, () => {
                this.pickTopic();
            }); });
    }

    render(){
        return(
            <div>
                {this.state.roomTopic.map((topic, index) => (
                    <div>
                        {topic.topic_name} by {topic.speaker} [{topic.start_time} - {topic.end_time}]
                        <br/>
                        <DropdownItem divider />
                    </div>
                ))}
            </div>
        )
    }
}

export default ShowTopic