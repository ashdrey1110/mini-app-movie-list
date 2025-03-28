import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';


export default function AllMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
  }, [])

  return (
    <>
    <h2>All Movies</h2>
    {movies.map((movie) => {
        return (
            <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                    {movie.title}
                </Link>
            </div>
        )
    })}
    </>
  )
}
