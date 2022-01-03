
import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    {(this.state.show) ? myheader = <Child /> : myheader = <h1 style={{color:"red"}}>component is delet</h1>}

    // if (this.state.show) {
    //   myheader = <Child />;
    // };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

export default Todo;
// ReactDOM.render(<Container />, document.getElementById('root'));