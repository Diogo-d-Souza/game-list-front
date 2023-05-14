import './genre.css'

interface GenreProps{
    name: string
}

export function Genre({ name } : GenreProps){
    return(
        
        <div className="cards">
            <h1>{name}</h1>
        </div>
    )
}