import {create} from "zustand";

export const useMovieStore = create<MovieStore>((set)=>({
    currentMovie:undefined,
    setMovie:(movie)=>{
        set({currentMovie:movie})
    }
}))