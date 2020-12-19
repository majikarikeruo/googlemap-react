import React from "react";
import ReactDOM from "react-dom";
import Map from "./GoogleMaps";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcsome!</h1>
        <Map />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);