import {NavLink, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getMovie} from "../../api/Movie.api.ts";
import s from './Movie.module.css'
import gif from '../../assets/loading.gif'
import {Rate} from "antd";
import {Genres} from "../../components/genres/Genres.tsx";
import {LeftOutlined} from "@ant-design/icons";
import {useMovieStore} from "../../store/currentMovieStore.ts";
import {useEffect} from "react";

export const Movie = () => {
    const {id} = useParams()
    const {data, isLoading, isError, isFetched} = useQuery('current', () => getMovie(id))
    const {currentMovie,setMovie} = useMovieStore()

    useEffect(() => {
        console.log(currentMovie)
        if (isFetched && data) {
            setMovie(data);
        }
        return ()=>{
            setMovie(undefined);
        }
    }, [isFetched, data]);
    if (isError) {
        return <h1>Error</h1>
    }
    if (isLoading || !currentMovie) {
        return <img src={gif}/>
    }
    return (
        <div className={s.movieContainer}>
            <NavLink to={'/'} className={s.link}><LeftOutlined/>Back</NavLink>
            <h1 className={s.title}>
                {currentMovie.title}
            </h1>
            <div className={s.movieAbout}>
                <img src={'https://image.tmdb.org/t/p/original' + currentMovie.poster_path} className={s.img}/>
                <div className={s.description}>
                    <p className={s.descritpion}>{currentMovie.overview}</p>
                    <div className={s.rating}>
                        <span> Rating <Rate disabled defaultValue={currentMovie.vote_average / 2}/> </span>
                        <span> Total {currentMovie.vote_count}</span>
                    </div>
                    <span><h4>Release: {currentMovie.release_date}</h4></span>
                    <Genres data={currentMovie.genres}/>
                </div>
            </div>
        </div>
    )
}