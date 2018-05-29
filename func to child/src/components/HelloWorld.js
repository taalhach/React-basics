import React from "react"
export class HelloWorld extends React.Component{
    constructor(props){
        super(props)
        this.deleteval=this.deleteval.bind(this)
        this.changeIncompo=this.changeIncompo.bind(this)
        this.wow=this.wow.bind(this)
        this.state={
            status:0
        }
    }
    deleteval(){
        this.props.deleteVal()
        this.setState({status:this.state.status++})
    }
    changeIncompo(event){
     this.props.changeFunc(event)
     this.setState({status:1})   
    }

    wow(){
        this.props.changetxt()
        this.setState({status:2})
    }
    render(){
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <input onChange={this.changeIncompo}/>
                <button onClick={this.deleteval} className="btn btn-primary">delete</button>
                <button onClick={this.wow} className="btn btn-primary">Change title</button>
            </div>
        )
    }
}