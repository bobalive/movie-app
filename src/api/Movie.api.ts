import axios from "axios";

export const getMovies = async(page:number)=>{
    const res= await axios.get<MovieResults>('https://api.themoviedb.org/3/movie/popular?language=en-US&page='+page,{
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTY1MTdmMWExYTdhOGNjN2FiYzk2OGJlOWM5ZmU1YyIsInN1YiI6IjY2MjdkZjc1NjJmMzM1MDE2NGQ5ZWJkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5lilOgKG_epfNV-sHWB4RLIjk7kPcn3iR7zmZfppJw'
        }
    })
    return res.data
}
export const getMovie = async(id= '1')=>{
    const res= await axios.get<MovieDetails>(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,{
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTY1MTdmMWExYTdhOGNjN2FiYzk2OGJlOWM5ZmU1YyIsInN1YiI6IjY2MjdkZjc1NjJmMzM1MDE2NGQ5ZWJkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5lilOgKG_epfNV-sHWB4RLIjk7kPcn3iR7zmZfppJw'
        }
    })
    return res.data
}