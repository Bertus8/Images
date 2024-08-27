import React, { Component } from "react";
import ReactDOM from "react-dom";
import ImageList from "./components/image_list";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentDidMount() {
    axios
      .get("https://yoga-api-nzy4.onrender.com/v1/poses")
      .then((response) => this.setState({ images: response.data }))
      .catch((error) => console.error(error));
  }

  render() {
    console.log('images',this.state.images)
    return (
      <div>
        <h1>Image List</h1>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("react-target"));
});