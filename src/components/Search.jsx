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
            this.props.search(this.state.search, this.state.filter)
        }
    }

    onButtonClick = () => {
         this.props.search(this.state.search, this.state.filter)
    }

    onFilter = (e) =>{
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
            <button 
                className="glow-on-hover" 
                onClick={this.onButtonClick}
                >search
            </button>
           
    </div>
    <div className="Filter">
    <input defaultChecked onClick={this.onFilter} type="radio" id="all" name="button_radio" value=""/>
    <label htmlFor="all">all</label>
    <input onClick={this.onFilter} type="radio" id="movie" name="button_radio" value="movie"/>
    <label htmlFor="movie">movies</label>
    <input onClick={this.onFilter} type="radio" id="series" name="button_radio" value="series"/>
    <label htmlFor="series">series</label>
    </div>
    </>
    }
}

export default Search;