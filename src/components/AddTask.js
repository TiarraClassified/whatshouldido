import React, {Component} from 'react';

export default class AddTask extends Component{
    constructor(){
        super()
    }

    add(){
        console.log(this.newTask.value)
        this.props.addTask(this.newTask.value);
        this.newTask.value = '';
    }

    render(){
        return(
            <div>
                <form onSubmit={e=>{
                    e.preventDefault();
                    this.add()
                }}>

                <br/>

                <input id='add' ref={node => this.newTask = node}placeholder='Add new task here:'/>
                </form>
            </div>
        )
    }
}