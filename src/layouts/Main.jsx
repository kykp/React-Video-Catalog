import React from "react";
import "../index.css";
import Movies from "../components/Movies"
import Search from "../components/Search"

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=deb2a7f3&s=matrix")
      .then((Response) => Response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  onSearch = (str) =>{
    fetch(`http://www.omdbapi.com/?apikey=deb2a7f3&s=${str}`)
    .then((Response) => Response.json())
    .then((data) => this.setState({ movies: data.Search }));
    
  }

  render() { 
    const {movies} = this.state;
    return (
      <>
        <Search search={this.onSearch}/>
        <div className="App">
        {movies.length? 
        <Movies base={this.state.movies}/>
        : <h2> Loadding ...</h2>
        }
        </div>
       </>
    );
  }
}

export default Main;
