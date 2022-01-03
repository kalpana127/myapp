// import { click } from '@testing-library/user-event/dist/click';
import React, { Component } from 'react'

export default class Constructor extends Component {
constructor(){
    super();
this.state={ name:"my--old-name"};

}
changeame=()=>{
    this.setState({name:"my-new-name"});

}


    render() {
        return (
            <div>
  <h1>my name is {this.state.name}</h1> 
  <button onClick={this.changeame}>Change name</button>             
            </div>
        )
    }
}
