function Movie (props) {
    const {Poster, Title, Year, Type} = props;
return ( 
    <div className="Card">
        <img src={Poster} alt={Title}></img>
        <h2>{Title}</h2>
        <p>{Year} - {Type} </p>

    </div>
)
}
export default Movie;