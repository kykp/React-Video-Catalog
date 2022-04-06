import React from "react";
import "../index.css";
import Movies from "../components/Movies"
import Search from "../components/Search"
import Preloader from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((Response) => Response.json())
      .then((data) => this.setState({ movies: data.Search, loading: true }));
  }

  onSearch = (str, filter) =>{
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${filter}`)
    .then((Response) => Response.json())
    .then((data) => this.setState({ movies: data.Search, loading: true}));
  }

  render() { 
    const {movies, loading} = this.state;
    return (
      <>
       <Search search={this.onSearch}/>
         <div className="App">
        {loading
        ?<Movies base={movies}/>
        :<Preloader/>
        }
        </div>
       </>
    );
  }
}

export default Main;
