export interface SearchInterface {
    data?:MovieResults,
    page:number,
    total:number
    setPage:(page:number)=>void
    setData:(data:MovieResults)=>void
    setTotal:(page:number)=>void
}