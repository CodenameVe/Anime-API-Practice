import React from "react";

const Anime = ({ series }) => {
    return(
        <> 
        {series.map((series) => {
            return(
                <div key={series.mal_id}>
                    <h3>{series.title}</h3>
                    <img alt="series" src={series.images.jpg.image_url} />
                </div>
            )
        })}
        </>
    )
}

export default Anime