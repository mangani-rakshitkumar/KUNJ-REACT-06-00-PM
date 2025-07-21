import React from 'react'

const Card = ({ title, Poster, releaseDate }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${Poster}`

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} />
      <div className="p-4">
        <h2>{title}</h2>
        <p className="text-sm">{releaseDate}</p>
      </div>
    </div>
  )
}

export default Card