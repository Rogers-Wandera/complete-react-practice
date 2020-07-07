import React from 'react';
import './App.css';
import Person from './Person/Person';
import Login from './Login/Login';
import Useroutput from './Useroutput/Useroutput'
import Userinput from './Userinput/Userinput';
import Home from './App/App'
import Taskowner from './Taskowner/Taskowner'
import Tasks from './Tasks/Tasks'
import Attendants from './Attendants/Attendants'
import Button from '@material-ui/core/Button'


class App extends React.Component{
  state={
      name1: '',
      name2: '',
      task: '',
      person:[
       {name:'Rogers',age:10},
       {name:'Henry',age:9},
       {name:'Wilson',age:8},
       {name:'Ronnie',age:7},
       {name:'Angel',age:6},
      ],
      showtask : true
  }
  buttonShowtask = () =>{
    this.setState({
      showtask : false
    })
  }
  buttonShowtaskOwner = () =>{
    this.setState({
      showtask : true
    })
  }
  changedTaskowner1 = (event) =>{
    this.setState({
      name1 : event.target.value
    })
  }
  changedTaskowner2 = (event) =>{
    this.setState({
      name2: event.target.value
    })
  }
  changedTaskowner3 = (event) =>{
    this.setState({
      task: event.target.value
    })
  }

  render(){
    return(
      <div className='App'>
        <Button variant='contained'
          style={{margin:'20px'}}
          color='primary'
          onClick={this.buttonShowtaskOwner}>
          Show Taskowner
        </Button>
        <Button variant='contained'
          color='secondary'
          onClick={this.buttonShowtask}>
          Show Task
        </Button>
        
        {
          this.state.showtask ?
          <Taskowner 
            fname = {this.state.name1}
            lname = {this.state.name2}
            change={this.changedTaskowner1}
            changed={this.changedTaskowner2}
            changetask={this.changedTaskowner3}
            Task = {this.state.task}
         
        />
        :
        <div>
           <Tasks>
            <p>{this.state.name1}</p>
            <p>{this.state.name2}</p>
            <p>{this.state.task}</p>
           </Tasks>
          <div>
            {
              this.state.person.map(P =>{
                return(
                  <Attendants 
                   name={P.name}
                  />
                )
              })
            }
          </div>

        </div>
        }
      </div>
    )
  }
}
export default App;