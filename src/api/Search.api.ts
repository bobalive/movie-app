import axios, {AxiosResponse} from "axios";

export const search = async (query:string='',page:number) => {
    const res:AxiosResponse<MovieResults> = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,{
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTY1MTdmMWExYTdhOGNjN2FiYzk2OGJlOWM5ZmU1YyIsInN1YiI6IjY2MjdkZjc1NjJmMzM1MDE2NGQ5ZWJkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5lilOgKG_epfNV-sHWB4RLIjk7kPcn3iR7zmZfppJw'
        }
    })
    return res.data
}