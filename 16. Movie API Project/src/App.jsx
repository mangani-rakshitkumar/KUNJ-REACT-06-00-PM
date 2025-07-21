import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MoviePage from './Pages/MoviePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App