import React from 'react';

export default function Task(props){
    let num = 0;
    let lollipops = props.tasks.map((todo,i)=>{
        num++
        return(
            <div key={num}>{todo}
                <button onClick={()=>props.delete(i)}>Delete</button>
            </div>
        )
    })
    return(
       <div>{lollipops}</div>
    )
}