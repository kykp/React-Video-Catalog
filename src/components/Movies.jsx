import Movie from "./Movie";

function Movies (props) {
    return (
        props.base.map(i => {
          return    <Movie 
                    img={i.Poster}
                    title={i.Title}
                    year={i.Year}
                    type={i.Type}
                    key={i.imdbID}
                    />
        })
    )
}

export default Movies