import react from "react";

function Garage(props) {
    const cars = props.cars;
    return (
      <>
        <h1>Garage</h1>
        {cars.length > 3 ?
          <h2>
            You have {cars.length} cars in your garage
          </h2>:<p>uhyjhgjhg</p>
        }
      </>
    );
  }
  export default Garage;