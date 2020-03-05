import React from 'react';
import './App.css';
import MovieList from './Components/MovieList/MovieList';
import SearchBar from './Components/SearchBar/SearchBar';
import AdnewMovie from './Components/AddnewMovie/AdnewMovie';

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <MovieList />
      <AdnewMovie />
    </div>
  );
}

export default App;
