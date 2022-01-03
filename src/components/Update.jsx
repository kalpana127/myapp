import React from 'react';
import ReactDOM from 'react-dom';

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 1000)
//   }
changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="div1"></div>
      <div id="div2"></div>
      <button onClick={this.changeColor}>change value</button>
      </div>
    );
  }
}
export default Update;
// ReactDOM.render(<Header />, document.getElementById('root'))