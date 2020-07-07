import React from 'react';


const Userinput = (props) =>{
    return(
        <div className ='input'>
         <input 
             type='text'
            value={props.UserName} 
             onChange={props.change}
            />
        </div>
    )
}
export default Userinput