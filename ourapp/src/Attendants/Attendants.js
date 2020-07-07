import React from 'react';
import Button from '@material-ui/core/Button'

const Attendants = (props) =>{
     return(
     <div>
        <div>
            <span>
                {props.name}
           </span>
           
        </div>
        <Button variant='contained'
              color='secondary'>
              Show Attendants
              </Button> 
     </div>
     )
}
export default  Attendants;