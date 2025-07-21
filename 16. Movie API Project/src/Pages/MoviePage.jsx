import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'

const MoviePage = () => {
  const [movieData, setMovieData] = useState([])
  const [page, setPage] = useState(1)

  const fetchMovies = (pageNum) => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=a2d86755e5d6eac04182233d4c6dcb1e&page=${pageNum}`)
      .then((req) => req.json())
      .then((res) => {
        setMovieData((prev) => [...prev, ...res.results])
      })
  }

  useEffect(() => {
    fetchMovies(page)
  }, [page])

  const viewMoreBtn = () => {
    setPage(page + 1)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="movie-grid">
        {
          movieData.map((e, i) => (
            <Card key={i} title={e.title} releaseDate={e.release_date} Poster={e.poster_path} />
          ))
        }
      </div>

      <div className="view-more-container">
        <button onClick={viewMoreBtn} className="view-more-btn">
          VIEW MORE MOVIE
        </button>
      </div>
    </div>
  )
}

export default MoviePage