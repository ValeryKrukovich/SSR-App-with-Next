import React from 'react';
import classes from '../../../styles/Main.module.css';
import MovieListErrorBoundary from '../MoviesList/MovieListErrorBoundary';
import MoviesListSsr from '../MoviesList/MovieListSsr';

export default function Main(props) {
    return (
        <>
            <div className={classes.container}>
                <MovieListErrorBoundary>
                    {/*<FilterPanel />*/}
                    <MoviesListSsr onMovieClickHandler={props.onMovieClickHandler} movies={props.movies} />
                </MovieListErrorBoundary>
            </div>
        </>
    )
}
