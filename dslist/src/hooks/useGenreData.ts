import axios, { AxiosPromise } from "axios"
import { GenreData } from "../interfaces/GenreData"
import { useQuery } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

const fetchData = async (): AxiosPromise<GenreData[]> =>{
    const response = axios.get(API_URL + "/lists")
    return response
}

export function useGenreDate(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-date'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}