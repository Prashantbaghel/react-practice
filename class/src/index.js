import React from "react";
import ReactDOM from "react-dom";
import Seasons from "./Seasons";
import Loader from "./Loader";
// CLASS EXTENDS THE FUNCTIONALITY FROM THE REACT PACKAGES
// CONSTRUCTOR FUNCTION
// CALL SUPER TO EXPORT ALL THE FUNCTION FROM THE SUPER OR PARENT CLASS WHICH HERE IS REACT COMPONENTS

class App extends React.Component {
  constructor(props) {
    super(props);

    // ONLY TIME WHEN WE ASSIGN STATE DIRECTLY

    this.state = { latitude: null, error: "" };
  }
  //Alternative method to intialise the state, istead of constructor method

  // state = { latitude: null, error: ""};
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // PROPER METHOD TO ASSIGN THE STATE
      // ALWAYS USE setState TO ASSIGN THE STATE

      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
  }
  componentDidUpdate() {
    console.log("my component rerendered");
  }

  renderContent() {
    if (this.state.error && !this.state.latitude) {
      return <div> Error: {this.state.error} </div>;
    }

    if (this.state.latitude && !this.state.error) {
      return <Seasons latitude={this.state.latitude} />;
    }
    return <Loader message="Please allow location access" />;
  }

  // RENDER METHOD WHEN WE USE CLASS BASED COMPONENTS

  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}
// RENDER THE APP COMPONENTS

ReactDOM.render(<App />, document.querySelector("#root"));
