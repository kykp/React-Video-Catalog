import React from "react";
import Movies from "./components/Movies"
import {Header} from "./layouts/Header"
import { Footer } from "./layouts/Footer";

import "./index.css"



class App extends React.Component {

  state = {
    movies: [],
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=deb2a7f3&s=matrix")
     .then(Response => Response.json())
     .then(data => this.setState({movies: data.Search}))
  }


  render() {
  return (
    <>
        <Header className="Main"/> 
        <div className="App"> <Movies base={this.state.movies}/></div>
        <Footer/>
    </>
  );
          }
}

export default App;
