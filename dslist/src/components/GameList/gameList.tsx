import { Link, useParams } from "react-router-dom";
import { useGameListData } from "../../hooks/useGameListData";
import { GameListWithGenreData } from "../../interfaces/GameListWithGenreData";
import "./gameList.css"

interface GameListProps {
    games: GameListWithGenreData[] | undefined
}


export function GameList({ games }: GameListProps) {
    if (!games) {
        return <div>Loading...</div>;
    }
    return (
        <div className="main">
            <Link className="btn" to={'/'}>Voltar</Link>
            <h1 className="title">{games?.[0]?.genreName}</h1>
            {games?.map(game => (
                <div className="card-inside">
                    <div className="img-title">
                        <img src={game.imgUrl} />
                    </div>
                    <div className="description">
                        <h4>{game.title}</h4>
                        <p><b>Description:</b> {game.shortDescription}</p>
                        <p>Game Year: {game.year}</p>
                        <button className="detail">See more details</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function GameListContainer() {
    const { id } = useParams<{ id: string }>();
    const { data } = useGameListData(parseInt(id!))
    console.log(data)
    return <GameList games={data} />
}