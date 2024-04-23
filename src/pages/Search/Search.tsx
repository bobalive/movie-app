import {useParams} from "react-router-dom";
import {MoviesCards} from "../../components/movies/MoviesCards.tsx";
import {useQuery} from "react-query";
import {search} from "../../api/Search.api.ts";
import {useSearchStore} from "../../store/searchStore.ts";
import {useEffect} from "react";

export const Search = () => {
  const {query} = useParams()
  const {data,setData,page,setPage ,total ,setTotal} = useSearchStore()
  const {data:newData,isFetched} = useQuery(['search',page,query] , ()=>search(query ,page))
  useEffect(()=>{
      if(isFetched&&newData){
        setData(newData)
      }
  },[newData,isFetched])
    useEffect(() => {
        if(newData?.total_pages){
            setTotal(newData.total_pages)
        }
    }, [query]);
  return(
      <div>
          <h1>Search: {query}</h1>
          {<MoviesCards total={total*10} data={data} page={page} setPage={setPage}/>}
      </div>
  )
}