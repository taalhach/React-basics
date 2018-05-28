import React from "react";
export class Home extends React.Component{  
    constructor(props){
    super(props)
    this.state={
        title:this.props.title
    }
    this.changeTitle = this.changeTitle.bind(this)
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
                <button onClick={this.changeTitle.bind(this)} className="btn btn-primary">Change title with states</button>
            </div>   

        );
    }
}