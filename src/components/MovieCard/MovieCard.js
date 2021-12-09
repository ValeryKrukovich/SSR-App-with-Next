import React from "react";
import classes from '../../../styles/MovieCard.module.css';
import { formatGenres } from '../../util/util';

export default function MovieCard(props) {
    const onClickHandler = (e) => {
        e.preventDefault();
        props.onClickHandler(props.movie);
    }

    return (
        <li>
            <a
                className={classes.movie__link}
                href='#'
                onClick={onClickHandler}>
                <img
                    className={classes.movie__image}
                    width='322'
                    height='455'
                    src={props.movie.poster_path}
                    alt=''/>
            </a>
            <div className={classes.movie__content}>
                <div>
                    <h3 className={classes.movie__head}>{props.movie.title}</h3>
                    <p className={classes.movie__text}>{formatGenres(props.movie.genres)}</p>
                </div>
                <div className={classes.movie__year}>{new Date(props.movie.release_date).getFullYear()}</div>
            </div>
        </li>
    )
}
