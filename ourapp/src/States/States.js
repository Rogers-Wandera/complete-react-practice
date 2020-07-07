



state={
  persons:[
    {id:'row1',name:'Rogers', age:23},
    {id:'row2',name:'Angel', age:25},
    {id:'row3',name:'Ronnie', age:30},
    {id:'row4',name:'Willy', age:40},
    {id:'row5',name:'Henry', age:20}
      
  ]    
}
  
changedName=(event,id)=>{
  const pIndex= this.state.persons.findIndex(i => {
    return i.id === id
  })
  const r = {
    ...this.state.persons[pIndex]
  }
  r.name= event.target.value;
  const y = [...this.state.persons]
  y[pIndex] = r
  
    this.setState({persons: y})
}  
  
     
changeName=()=>{
  this.setState({
    personDetails : !this.state.personDetails
  })
}
deletedPerson=(personindex)=>{
  const Member =[...this.state.persons]
   Member.splice(personindex,1)
  this.setState({
    persons:Member
  })

}

render() {
  const total = this. state.persons.reduce((total,sum)=>total+sum.age ,0)
  let Personss= null;
  if(this.state.personDetails){
    Personss=<div>
    {
      this.state.persons.map(person => {
        return(
          
          <Person
          name={person.name}
          age={person.age}
          key ={person.id}
          change={(event)=>this.changedName(event, person.id)}
          Click={()=>this.deletedPerson()}
           totalAge={total}
          >
        Hey i can also render
        </Person>
        
        ) 
      })
    }
      </div>
  }else{
     Personss=
     <div>{total}</div>
  }
    return(
         
        <div className='App'>
          
          <button onClick={this.changeName}
          className='button'
          >ClickMe</button>
          {Personss}
        </div>
     )
   }
}
