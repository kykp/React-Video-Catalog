function Movie (props) {
return ( 
    <div className="Card">
        <img src={props.Poster} alt={props.Title}></img>
        <h2>{props.Title}</h2>
        <p>{props.Year} - {props.Type} </p>

    </div>
)
}
export default Movie;