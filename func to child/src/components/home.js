import React from "react";
import {Helloworld, HelloWorld} from "./HelloWorld"
export class Home extends React.Component{  
    constructor(props){
    super(props)
    this.state={
        title:this.props.title,
        persons:["Jim","Tim","Dim"],
        update:"updated"
    }
    this.changeText=this.changeText.bind(this)
    this.renderGreeter=this.renderGreeter.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
    this.delete=this.delete.bind(this)
  }
  renderGreeter(){
    return(this.state.persons.map((p_name,i)=> <HelloWorld deleteVal={this.delete}  key={i} name={p_name} changetxt={this.changeTitle} changeFunc={this.changeText}/>))
              
  }

  changeText(event){

    this.setState({persons:[...this.state.persons,event.target.value],title:this.state.title+"update"})
  }
  delete(){
      this.setState({persons:this.state.persons.filter(name => {return name !="Jim"} )})
  }
  changeTitle(){
      this.setState({
          title:this.state.title +"updated"
      });
  }
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.changeTitle} className="btn btn-primary">Change title</button>
                
               {this.renderGreeter()}
               <input type="text" onChange={this.changeText}/>
               
            </div>   
           
        );
    }
}