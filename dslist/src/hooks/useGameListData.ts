import axios, { AxiosPromise } from "axios"
import { GameListData } from "../interfaces/GameListData"
import { useQuery } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

export const fetchGamesByGenreId = async (genreId: number): AxiosPromise<GameListData[]> => {
    const response = await axios.get(`${API_URL}/lists/${genreId}/games`)
    return response
}

export function useGameListData(id: number) {
    const query = useQuery({
      queryFn: () => fetchGamesByGenreId(id),
      queryKey: ['game-list-data', id],
      retry: 2
    });
  
    return {
      ...query,
      data: query.data?.data
    };
  }