import React from 'react';
import { MovieType } from '../../../domain/movie/MovieModels';

type MovieProps = {
    movie: MovieType;
};

export const Movie = ({movie}: MovieProps) => {
    return (
        <div>
            <img src={movie.poster_path} alt="posterMovie" />
            <h1>{movie.title}</h1>
        </div>
    )
}


