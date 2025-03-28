import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import AllMovies from "./AllMovies";


export default function Home() {
  const [movie, setMovie] = useState([]);
  const [id, setId] = useState('')

  let inputHandler = () => {
    let userInput = document.querySelector('input').value;
    if (!isNaN(userInput)) {
      setId(userInput)
    }
  }

  let handleEnter = (event) =>{
    if(event.key === 'Enter'){
      inputHandler()
    }
  }

  useEffect(() => {
    fetch(`http://localhost:8081/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data[0]))
  }, [id])



  return (
    <>
    <div>
      <br/>
      <h3>Movie Search</h3>
      <input type='text' name='movieID' placeholder='Movie ID' onKeyDown={handleEnter}></input><button onClick={inputHandler}>Search</button>
      <p>
        {!id ? `No search started` : id<0 || id>50? `No Movie with that ID`: <>{`The movie with ID ${movie.id} is ${movie.title}`}</>}
      </p>
    </div>
    <AllMovies />
    </>
  )
}