import {create} from "zustand";

export const useMovieStore = create<MovieStore>((set)=>({
    currentMovie:undefined,
    setMovie:(movie:MovieDetails)=>{
        set({currentMovie:movie})
    }
}))