import {MoviesCards} from "../../components/movies/MoviesCards.tsx";
import {useQuery} from "react-query";
import {getMovies} from "../../api/Movie.api.ts";
import {useCurrentPageStore} from "../../store/currentPageStore.ts";

export const Main = ({total}: { total:number }) => {
    const {page,setPage}= useCurrentPageStore()
    const {data} = useQuery(['movies',page] , ()=> getMovies(page))
    return (
        <MoviesCards total={total *10} data={data} page={page} setPage={setPage}/>
    )
}