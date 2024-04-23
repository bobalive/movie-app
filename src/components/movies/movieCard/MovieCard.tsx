import {Card, Rate} from "antd";
import {MovieCardInterface} from "./MovieCard.interface.ts";
import s from './MovieCard.module.css'
import Meta from "antd/es/card/Meta";

export const MovieCard = ({title , poster, rating}:MovieCardInterface) => {
    return(
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={"https://image.tmdb.org/t/p/original"+poster} className={s.img}  />}
            className={s.card}
        >
            <Meta title={title} />
            <div className={s.rating}> rating <Rate disabled defaultValue={rating/2}/></div>
        </Card>
    )
}