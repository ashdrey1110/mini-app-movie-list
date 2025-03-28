import { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';


export default function Movie() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8081/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data[0]))
  }, [id])


  return (
    <>
    <h2>
        {`This movie is called ${movie.title}`}
    </h2>
    </>
  )
}