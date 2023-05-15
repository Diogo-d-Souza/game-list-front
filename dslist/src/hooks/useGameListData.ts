import axios, { AxiosPromise } from "axios"
import { GameListData } from "../interfaces/GameListData"
import { useQuery } from "@tanstack/react-query"
import { GameListWithGenreData } from "../interfaces/GameListWithGenreData"

const API_URL = "http://localhost:8080"

export const fetchGamesByGenreId = async (genreId: number): Promise<GameListWithGenreData[]> => {
  const [gamesResponse, genresResponse] = await Promise.all([
    axios.get(`${API_URL}/lists/${genreId}/games`),
    axios.get(`${API_URL}/lists`),
  ]);

  const gamesData = gamesResponse.data
  const genreName = genresResponse.data[genreId-1].name

  const gamesWithGenreName = gamesData.map((gameData: GameListWithGenreData) => ({
    ...gameData,
    genreName,
  }));

  return gamesWithGenreName;
};

export function useGameListData(id: number) {
    const query = useQuery({
      queryFn: () => fetchGamesByGenreId(id),
      queryKey: ['game-list-data', id],
      retry: 2
    });
  
    return {
      ...query,
      data: query.data ?? []
    }
    
  }