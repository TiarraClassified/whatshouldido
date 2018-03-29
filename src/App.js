import React, { Component } from 'react';
import './App.css';
import Task from './components/Task';
import AddTask from './components/AddTask';

class App extends Component {
  constructor(){
    super()

    this.state={
      tasks:["Write Creative Sentence", "Dance", "Play a Game", "Work on Code Project", "Browse Internet", "Listen to Podcast", "Meditate"],
      picked: ''
    }
    this.delete = this.delete.bind(this);
    this.newTask = this.newTask.bind(this);
  }

  delete(index){
    let temp = this.state.tasks;
    temp.splice(index,1);
    this.setState({
      tasks: temp
    })
  }

  newTask(string){
    let temp = this.state.tasks;
    temp.push(string);
    this.setState({
      tasks: temp
    })
  }

  pick(){
    let array = this.state.tasks;
    let max = array.length-1;
    let min = 0;
    let index = Math.floor(Math.random() * (max-min +1) + min)

    this.setState({
      picked: array[index]
    })

  }

  render() {
    return (
      <section id='main'>

        <div id='taskholder'>
          <Task tasks={this.state.tasks} delete={this.delete}/>
        <AddTask addTask={this.newTask}/>
        </div>
        <button id='pick' onClick={()=>this.pick()}><p>Pick Task To Do</p></button><br/>
        {this.state.picked}
      </section>
    );
  }
}

export default App;
