import { useState } from 'react';
import './App.css'
import { Genre } from './components/Genres/genre'
import { useGameListData } from './hooks/useGameListData';
import { useGenreDate } from './hooks/useGenreData'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { GameList } from './components/GameList/gameList';

function App() {
  const { data } = useGenreDate()

  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(data ? data[0]?.id : null);
  useGameListData(selectedGenreId || 0);

  const handleGenreClick = (genreId: number) => {
    setSelectedGenreId(genreId);
  };


  return (
    <>
      <div className='container'>
        <h1>Gêneros dos jogos</h1>
        <div className="generos">
          {data?.map(genreData =>
            <Link key={genreData.id} to={`/gamesList/${genreData.id}`}
              onClick={() => handleGenreClick(genreData.id)}>
              <Genre
                name={genreData.name}
              />
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default App
