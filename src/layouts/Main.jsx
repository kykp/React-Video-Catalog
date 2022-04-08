import React, {useState, useEffect} from "react";
import Movies from "../components/Movies"
import {Search} from "../components/Search"
import Preloader from "../components/Preloader";
import "../index.css";

const API_KEY = process.env.REACT_APP_API_KEY;

export function Main () {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
  .then((Response) => Response.json())
  .then((data) => {
    setMovies(data.Search)
    setLoading(true)})
  .catch((err) => {
    console.error(err);
    setLoading({loading:false})
  })
},[])
  const onSearch = (str, filter) =>{
    setLoading({loading: true})
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${filter}`)
    .then((Response) => Response.json())
    .then((data) => {
      setMovies(data.Search)
      setLoading(true)})
    .catch((err) => {
      console.error(err);
      setLoading({loading:false})
    })
  }
    return (
      <>
       <Search onSearch={onSearch}/>
         <div className="App">
        {loading
        ?<Movies base={movies}/>
        :<Preloader/>
        }
        </div>
       </>
    );
  }


