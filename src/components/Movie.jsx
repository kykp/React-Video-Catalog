import "./Movie.css"

function Movie (props) {
return ( 
    <div className="Card">
        <img src={props.img} alt={props.title}></img>
        <h2>{props.title}</h2>
        <p>{props.year} - {props.type} </p>

    </div>
)
}
export default Movie;