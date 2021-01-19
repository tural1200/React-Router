import React, { Component } from "react";
import "./css/style.css";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid home">
        <div className="container my-container">
          <div className="row">
            <div className="col-md-6 left-col-2">
              <div className="box">
                <h1>Real benefits.</h1>
                <h1>Real people.</h1>
                <p>
                  We combine corportate benefits with strategic financial
                  management to provide valuable solutions for compaines at
                  scale.
                </p>
                <button>Schedule a Consult</button>
              </div>
            </div>
            <div className="col-md-6 right-col-2">
                
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
