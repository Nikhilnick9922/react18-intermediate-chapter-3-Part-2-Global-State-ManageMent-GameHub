import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText? : string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void; // here
}

const useGameQueryStore = create<GameQueryStore>(set=> ({
    gameQuery : {},
    setSearchText : (searchText)=>  set((store)=>({gameQuery: {searchText}})) ,  // store is previous state
    setGenreId : (genreId)=> set((store)=>({gameQuery : {...store.gameQuery, genreId}})),
    setPlatformId : (platformId)=> set((store)=> ({gameQuery : {...store.gameQuery, platformId}})),
    setSortOrder : (sortOrder)=> set((store)=>({ gameQuery : {...store.gameQuery ,sortOrder}}))
}))


export default useGameQueryStore;

// this is place where we need the gameQuery most , and in our
// app we don't need anywhere else in our project , so we make it priavte by removing the export
// so this is part of implimentation details

//  we also need few functions for updating various `properties`

// we might have question why don't we have single function like setGameQuery
    //  the reason is logic for updating searchText is differnt from other properties


    //  in hook gameQuery is complaining about missing sortOrder & searchText
    // since we have 2 optional queries , we can use empty stinrg, but to make 
    // thingks consistent we are goign to use ? optional for them
    // after making them optinal error changes, so impliment missing one by one


//  when user searches for game we should clear other filters  like genres or platforms 
// because user have to search in all , if the y have selected wrong platform or wrong genres
// they will not be able to find the game
// this is what they mean by logic for updating seachQuery different from other properties


//  so this is final implimentation , compare it with own implimentation

//  now we have error in app.tsx , since we have removed gamequqry but we gonna fixe that in next 