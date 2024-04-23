import {create} from "zustand";
import {SearchInterface} from "../interfaces/Search.interface.ts";

export const useSearchStore = create<SearchInterface>((set=>({
    page:1,
    data:undefined,
    total:1,
    setPage:(page)=>set( {page }),
    setData:(data)=>set({data}),
    setTotal:(page)=>set({total:page})
})))