import './App.css'
import {Main} from "./pages/Main/Main.tsx";
import {Route, Routes} from "react-router-dom";
import {Movie} from "./pages/Movie/Movie.tsx";
import {Search} from "./pages/Search/Search.tsx";
import {Header} from "./components/header/Header.tsx";
import {useQuery} from "react-query";
import {getMovies} from "./api/Movie.api.ts";

function App() {
    const {data} = useQuery('total' , ()=> getMovies(1))

    return (
      <div className={'container'}>
          <Header/>
          <Routes>
              <Route path={'/'} element={<Main total={data?.total_pages||5}/>}/>
              <Route path={'/movie/:id'} element={<Movie/>}/>
              <Route path={'/search/:query'} element={<Search/>}/>
          </Routes>
      </div>
  )
}

export default App
