import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom';
import Home from "./components/Home";
import AllMovies from "./components/AllMovies";
import Movie from "./components/Movie";
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
    <Link to={`/`}>
    <h1>Movie List</h1>
    </ Link>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<AllMovies />} />
      <Route path='/movie/:id' element={<Movie />} />
    </Routes>

    {/* <ButtonGroup variant='contained'>
      <Button onClick={() => navigate('/')}>HOME</Button>
      <Button onClick={() => navigate('/movies')}>All Movies</Button>
      <Button onClick={() => navigate('/movie/:id')}>Movie Search</Button>
    </ButtonGroup> */}
    </>
  )
}

export default App
