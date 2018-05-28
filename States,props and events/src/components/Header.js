import React from "react"
 export class Header extends React.Component{
    render(){
        return(
        <div>
            <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
            <ul className="nav navbar-nav">
                {this.props.itemList.map((item) => <li>{item}</li>)}
            </ul>
            </div>
            </nav>
        
        </div>
        );
        
    }
}