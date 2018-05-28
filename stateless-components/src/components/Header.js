import React from "react"
 export class Header extends React.Component{
    constructor(props){
        super(props)
        this.changeContent=this.changeContent.bind(this)
    this.state={
        description:this.props.desc
    }
    }
    changeContent(){
        this.setState({
            description: "See paragraph is totally changed"
        })
    }
    render(){
        return(
        <div>
            <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
            <ul className="nav navbar-nav">
                {this.props.itemList.map((item) => <li>{item}</li>)}
            </ul>
            <p>{this.state.description}</p>
            <div>
            <button className="btn btn-primary" onClick={this.changeContent}>Change paragraph</button>
            </div>
            </div>
            </nav>
        
        </div>
        );
        
    }
}