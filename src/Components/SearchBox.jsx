import React from "react";

const SearchBox = ({ searchfield, SearchChange }) => {
    return(
        <div className="pa2"> 
            
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