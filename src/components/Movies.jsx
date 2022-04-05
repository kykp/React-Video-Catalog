import Movie from "./Movie";

function Movies (props) {
    return (
        props.base.map(i => {
          return <Movie key={i.imdbID} {...i}/>
        })
       
    )
}

export default Movies