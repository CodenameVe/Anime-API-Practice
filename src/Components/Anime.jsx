import React from "react";

const Anime = ({ series = [] }) => {
    if (!series || series.length === 0) {
        return <p>No anime found.</p>;
    }

    return(
    <div className="anime-container">
      {series.map((anime) => (
        <div className="anime-card" key={anime.mal_id}>
          <img
            className="anime-image"
            src={anime.images.jpg.image_url}
            alt={anime.title}
          />

          <div className="anime-overlay">
            <h3>{anime.title}</h3>
            <p>⭐ {anime.score ?? "N/A"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Anime