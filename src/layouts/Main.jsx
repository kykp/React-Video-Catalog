import React from "react";
import "../index.css";
import Movies from "../components/Movies"

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=deb2a7f3&s=matrix")
      .then((Response) => Response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    return (
        <div className="App">
        <Movies base={this.state.movies} />
        </div>
    );
  }
}

export default Main;
