import {create} from "zustand";
import {CurrentPageStoreInterface} from "../interfaces/CurrentPageStore.interface.ts";

export const useCurrentPageStore = create<CurrentPageStoreInterface>((set) =>({
    page:1,
    setPage:(page)=>set({page})
}) )
