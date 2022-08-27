import { Component } from "react";

class Button extends Component{

    state = {
        item : null,
        index: null
    }


    constructor(props){
        super();
        this.state.item = props.data
        this.state.index = props.ind 
    }
    
    plusHandler = () =>{
        var plusData = this.state.item + 1;
        this.setState({item : plusData,index : this.state.index})
    }

    componentDidUpdate = () => {

    }
    minusHandler = () =>{
        var plusData = this.state.item - 1;
        this.setState({item : plusData,index : this.state.index})
    }

    deleteHandle = (Id) =>{
      
    }


    render(){
        
        return (
            <div style={{marginTop:'10px'}}>
                <button onClick={this.minusHandler}>-</button><span>{this.state.item}</span><button onClick={this.plusHandler()}>+</button><button onClick={this.deleteHandle(this.state.index)}>Delete</button>
            </div>
        )
    }
}
export default Button;