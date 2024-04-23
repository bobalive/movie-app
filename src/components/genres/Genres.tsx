import s from "./Genres.module.css";
import { GenresInterface} from "./Genre.interface.ts";
import {Button} from "antd";

export const Genres = ({data}:GenresInterface) => {
  return (
      <div className={s.genreContainer}>
          {data?.map(genre => (
              <Button key={genre.id}>{genre.name}</Button>
          ))}
      </div>
  )
}