import React from 'react';
import './App.css';
import MovieList from './Components/MovieList/MovieList';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <MovieList />
    </div>
  );
}

export default App;
