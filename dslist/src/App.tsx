import './App.css'
import { Genre } from './components/Genres/genre'
import { useGenreDate } from './hooks/useGenreData'
import { Link } from 'react-router-dom';

function App() {
  const { data } = useGenreDate()

  return (
    <div className='container'>
      <h1>Gêneros dos jogos</h1>
      <div className="generos">
        {data?.map(genreData =>
          <Link className="button" key={genreData.id} to={`/gamesList/${genreData.id}`}>
            <Genre
              name={genreData.name}
            />
          </Link>
        )}
      </div>
    </div>
  )
}

export default App
