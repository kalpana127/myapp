import react from "react";

function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
  function Garage() { 
    const cars = ['Fojkhjrd', ' BukhjggtMW', ' Audi'];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
         <Car brand={cars} />
        </ul>
      </>
    );
  }
  export default Garage;