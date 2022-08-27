import { Component } from "react";
import Button from "./button.component";

class App extends Component{

    state = {
      boxes : []
    }

    buttonHandle = () =>{
        const newState = {boxes : [...this.state.boxes,0]}
        this.setState(newState)
    }

  render(){
   
    return(
      <>
       <button onClick={this.buttonHandle}> Create new</button>
          {

            this.state.boxes.map((item,index)=>{
              return(
                  <Button data={item} ind={index} key={index}/>
              )
            })
          }
      </>
    )
  }
}
export default App;