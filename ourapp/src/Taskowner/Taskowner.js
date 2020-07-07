import React from 'react';
import Textfield from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const Taskowner = (props) =>{
    return(
       <div className='contain'>
          <div className='form1'>
           <h1 style={{color:'green'}}>I am The Task Manager</h1> 
           <div>
               <label className='label'>First Name </label>
               <Textfield type='text'
                  style={{margin:'20px'}}
                  variant='outlined'
                  value={props.fname}
                  onChange={props.change}
                />
               <br/>
               <label className='label'>Last Name</label>
               <Textfield type='text'
                  style={{margin:'15px'}}
                  className='txt'
                  variant='outlined'
                  value={props.lname} 
                  onChange={props.changed}
                />
               <br/>
               <label className='label'>Tasks</label>
               <Textfield type='text'
                 style={{margin:'15px'}}
                 variant='outlined'
                 color='primary'
                 value={props.Task} 
                 onChange={props.changetask}
               />
               <br/>
               <Button variant='contained'
                 styles={{margin:'15px'}}
                 color='secondary'
               >Submit</Button>
           </div>
        </div>
        <span>
             <footer className='footer'>
               &copy;Skylla Co All Rights Reserved
            </footer>
           </span>
       </div>
    )
}
export default Taskowner;