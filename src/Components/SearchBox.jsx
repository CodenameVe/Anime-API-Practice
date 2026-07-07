import React from "react";

const SearchBox = ({ searchfield, SearchChange }) => {
    return(
        <div className="pa2"> 
            <h1>Search Anime</h1>
            <input
                className="search-box"
                type="search"
                placeholder="Search Anime"
                onChange={SearchChange}
            />
        </div>
    )
} 

export default SearchBox