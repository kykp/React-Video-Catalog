import React, {useState, useRef} from "react";

export function Search(props) {
  const {
    onSearch = Function.prototype
  } = props;

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const buttonRef = useRef(null);
   
  const handlKey = (event) => {
    if (event.key === "Enter") {
      onSearch(search, filter);
    }
  };

  const onButtonClick = () => {
    onSearch(search, filter);
  };

  const onFilter = (e) => {
    setFilter(e.target.value);
    onSearch(search, e.target.value)
  };

  const onSample = (e) => {
    buttonRef.current = e.target.value
    setSearch(buttonRef.current)
    onSearch(buttonRef.current, filter)
  }

    return (
      <>
        <div className="samples_buttons">
          <button onClick={onSample} value="Batman">Batman</button>
          <button onClick={onSample} value="Superman">SuperMan</button>
          <button onClick={onSample} value="Simpsons">Simpsons</button>
        </div>
        <div className="Search">
          <input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handlKey}
          />
          <button className="glow-on-hover" onClick={onButtonClick}>
            search
          </button>
        </div>
        <div className="Filter">
          <input
            defaultChecked
            onChange={onFilter}
            type="radio"
            id="all"
            name="button_radio"
            value=""
          />
          <label htmlFor="all">all</label>
          <input
            onChange={onFilter}
            type="radio"
            id="movie"
            name="button_radio"
            value="movie"
          />
          <label htmlFor="movie">movies</label>
          <input
            onChange={onFilter}
            type="radio"
            id="series"
            name="button_radio"
            value="series"
          />
          <label htmlFor="series">series</label>
        </div>
      </>
    );
}

