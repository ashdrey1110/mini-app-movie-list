import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import AllMovies from "./AllMovies";


export default function Home() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8081/movies')
//       .then(res => res.json())
//       .then(data => setMovies(data))
//   }, [])

  return (
    <>
    <AllMovies />
    </>
  )
}