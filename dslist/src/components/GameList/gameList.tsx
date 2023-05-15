import { useParams } from "react-router-dom";
import { GameListData } from "../../interfaces/GameListData"
import { useGameListData } from "../../hooks/useGameListData";

interface GameListProps {
    games?: GameListData[]

}


export function GameList({ games }: GameListProps) {
    return (

        <div className="cards">
            <h1>TE</h1>

            {games?.map(game => (
                <div>
                    <h3>{game.title}</h3>
                    <p>description</p>
                    <p>{game.shortDescription}</p>
                    <img src={game.imgUrl} />
                </div>
            ))}
        </div>
    )
}

export function GameListContainer() {
    const { id } = useParams<{ id: string }>();
    const { data } = useGameListData(parseInt(id!));
    console.log(data)
    return <GameList games={data} />;
}