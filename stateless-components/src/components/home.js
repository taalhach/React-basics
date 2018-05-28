import React from "react";
import {Helloworld, HelloWorld} from "./HelloWorld"
export class Home extends React.Component{  
    constructor(props){
    super(props)
    this.state={
        title:this.props.title,
        persons:["Jim","Tim","Dim"]
    }
    this.changeText=this.changeText.bind(this)
    this.renderGreeter=this.renderGreeter.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
  }
  renderGreeter(){
    return(this.state.persons.map((p_name,i)=> <HelloWorld key={i} name={p_name}/>))
              
  }

  changeText(event){

    this.setState({title:event.target.value})
  }
  changeTitle(){
      this.setState({
          title:this.state.title +" updated"
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