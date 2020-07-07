import React from 'react';


class Login extends React.Component{
    
    render(){
        return(
           <div>
               <div>
            <label>Email</label>
            <input type='text' id='email'></input>
            <br/>
           </div>

            <div>
                <label>Password</label>
            <input type='password' id='password'></input>
            <br/>
            </div>
            
            <div>
                <button id='button'>Login</button>
            </div>
            
           </div>
        )
    }
}
export default Login;