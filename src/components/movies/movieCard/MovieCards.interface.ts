
export interface MovieCardsInterface {
    total:number
    page:number
    data?:MovieResults
    setPage:(page:number)=>void
}