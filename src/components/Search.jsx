import React from "react";

class Search extends React.Component {
    constructor(props){
    super(props);
    
    this.state = {
        search: "",
        filter: "",
    }
    
}

    handlKey = (event) => {
        if(event.key === "Enter") {
            this.props.search(this.state.search)
        }
    }
    radio = (e) =>{
        this.setState({filter: e.target.value})
    }

    render(){

    return <>
    <div className="Search">
        <input 
            type="search"
            placeholder="Search..."
            value={this.state.search}
            onChange={(e) => this.setState({search: e.target.value})}
            onKeyDown={this.handlKey}
            />
            <button className="glow-on-hover" onClick={() => {this.props.search(this.state.search)}}>search</button>
           
    </div>
    <div className="Filter">
    <input onClick={this.radio} type="radio" id="all" name="button_radio" value="all"/>
    <label htmlFor="all">All</label>
    <input onClick={this.radio} type="radio" id="movie" name="button_radio" value="movie"/>
    <label htmlFor="movie">Movies</label>
    <input onClick={this.radio} type="radio" id="serials" name="button_radio" value="serials"/>
    <label htmlFor="serials">Serials</label>
    </div>
    </>
    }
}

export default Search;