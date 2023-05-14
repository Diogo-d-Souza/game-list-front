import './App.css'
import { Genre } from './components/Genres/genre'
import { useGenreDate } from './hooks/useGenreData'
import { GenreData } from './interfaces/GenreData'

function App() {
  const { data } = useGenreDate()

  return (
    <>
      <div className='container'>
        <h1>Gêneros dos jogos</h1>
        <div className="generos">
          {data?.map(genreData =>
            <Genre
              name={genreData.name}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default App
