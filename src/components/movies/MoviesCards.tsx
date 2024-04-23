import s from './MoviesCards.module.css'
import {MovieCard} from "./movieCard/MovieCard.tsx";
import {NavLink} from "react-router-dom";
import gif from '../../assets/loading.gif'
import {Pagination, PaginationProps} from "antd";
import {MovieCardsInterface} from "./movieCard/MovieCards.interface.ts";

export const MoviesCards = ({data,total,page,setPage}:MovieCardsInterface)=>{

    const onChange: PaginationProps['onChange'] = (page) => {
        setPage(page);
    };
    return(
        <div className={s.cardsContainer}>
            <div className={s.pagination}>
                <Pagination current={page} onChange={onChange} total={total}/>
            </div>
            <div className={s.cards}>
                {data ? data.results.map(card => (
                        <NavLink key={card.id} to={'/movie/' + card.id}>
                            <MovieCard title={card.title}

                                       poster={card.poster_path}
                                       rating={card.vote_average}

                            />
                        </NavLink>
                    ))
                    : <img src={gif} className={s.loading}/>
                }
            </div>
        </div>
    )
}