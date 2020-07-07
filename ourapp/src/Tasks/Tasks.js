import React from 'react';

const Tasks = (props) =>{
    return(
        <div className='tasks'>
           <h3>I can Manage Tasks</h3>
           {props.children}
        </div>
    )
}
export default Tasks;