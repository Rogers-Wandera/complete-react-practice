import React from 'react';



const Person =(props)=>{
  
    return(
        <span> 
            <h1>Am <span onClick={props.Click}>{props.name}</span> and I'm {props.age}</h1>
           <p>{props.children}</p>
           
            <input type='text' 

            value={props.name} 
            onChange={props.change}
             className='in'
             onClick={props.click}
            />
            <input type='text' 
            value={props.age}
            onChange={props.change}
             className='in'
            />
            
            
        </span>
       
    )

}
export default Person;