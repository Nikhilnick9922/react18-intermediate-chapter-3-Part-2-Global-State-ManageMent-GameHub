import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
 
 const apiClient = new APIClient<Game>('/games')
 

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];       
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>

  useInfiniteQuery<FetchResponse<Game>, Error>({   
    queryKey : ['games', gameQuery],     
    queryFn : ({pageParam = 1})=> apiClient.getall({ params: {
      genres: gameQuery.genreId,   
      parents_platforms: gameQuery.platformId  ,  
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page : pageParam       
    }}),    
    getNextPageParam : (lastPage, allPages ) =>{    
            return lastPage.next ? allPages.length + 1 : undefined;
    } ,
    staleTime :  ms('24h'), // 24 hours here 

  })
 
 

export default useGames;



 