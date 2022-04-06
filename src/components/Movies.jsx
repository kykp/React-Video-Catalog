import Movie from "./Movie";

function Movies (props) {

  const { base = []} = props;

    return (<>
      {base.length ? (
        base.map((i) => <Movie key={i.imdbID} {...i}/>)
      ) : (
        <h4>Nothing found</h4>
      )}
      </>
    )
}

export default Movies