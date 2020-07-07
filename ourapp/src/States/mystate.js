state={
    username:'Ryan'
 }
 handledState = (event) =>{
   this.setState({
     username : event.target.value
   })
 }
 render(){
   return(
     <div className='App'>
       <Userinput
         change={this.handledState}
         UserName={this.state.username}
       />
        <Useroutput 
          Username={this.state.username}
        />
        <Useroutput 
          Username={this.state.username}
        />
        <Useroutput
         Username='Pauline' 
        />
     </div>
   )
 }
}