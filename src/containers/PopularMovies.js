import React from "react";
import classes from './PopularMovies.module.css';
import MovieCard from "../components/MovieCard/MovieCard";
import {Grid} from "@material-ui/core";

const movieDetails1 = {
    id: 1,
    title: 'Harry Potter And Chamber Of Secret',
    description: ' This impressive paella is a perfect party dish and a fun meal to cook together with your\n' +
        '                    guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    img: 'https://images.indianexpress.com/2018/07/wp-harrypotter-01.jpg',
    ratings: 8.4
};

const movieDetails2 = {
    id: 2,
    title: 'Harry Potter And Chamber Of Secret',
    description: ' This impressive paella is a perfect party dish and a fun meal to cook together with your\n' +
        '                    guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    img: 'https://images.indianexpress.com/2018/07/wp-harrypotter-01.jpg',
    ratings: 8.4
};

const movieDetails3 = {
    id: 3,
    title: 'Armageddon',
    description: 'After discovering that an asteroid the size of Texas is going to impact Earth in less than a month, NASA recruits a misfit team of deep-core drillers to save the planet',
    img: 'https://m.media-amazon.com/images/M/MV5BMGM0NzE2YjgtZGQ4YS00MmY3LTg4ZDMtYjUwNTNiNTJhNTQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    ratings: 6.7
};

const movieDetails4 = {
    id: 4,
    title: 'Armageddon',
    description: 'After discovering that an asteroid the size of Texas is going to',
    img: 'https://m.media-amazon.com/images/M/MV5BMGM0NzE2YjgtZGQ4YS00MmY3LTg4ZDMtYjUwNTNiNTJhNTQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    ratings: 6.7
};

const movieDetails5 = {
    id: 5,
    title: 'Armageddon',
    description: 'After discovering that an asteroid the size of Texas is going to impact Earth in less than a month, NASA recruits a misfit team of deep-core drillers to save the planet',
    img: 'https://m.media-amazon.com/images/M/MV5BMGM0NzE2YjgtZGQ4YS00MmY3LTg4ZDMtYjUwNTNiNTJhNTQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    ratings: 10
};

const movieDetails6 = {
    id: 6,
    title: 'Chucky',
    description: 'After discovering that an asteroid the size of Texas is going to impact Earth in less than a month, NASA recruits a misfit team of deep-core drillers to save the planet',
    img: 'https://m.media-amazon.com/images/M/MV5BZmM4OThjMmEtYWY3NC00OTMzLWIyOTYtM2FkZWE2MzkwZGNlXkEyXkFqcGdeQXVyNzk5NDk3MjQ@._V1_.jpg',
    ratings: 5
};


const PopularMovies = () => {

    const movies = [movieDetails1, movieDetails2, movieDetails3, movieDetails4, movieDetails5, movieDetails6];
    const popularMovies = movies.map(movie => {
        return <Grid key={movie.id} item xs={12} sm={6} md={3} xl={3}>
            <MovieCard {...movie}/>
        </Grid>;
    });

    return (
        <div className={classes.PopularMovies}>
            <Grid container
                  spacing={1}
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                {popularMovies}
            </Grid>

        </div>
    );
};

export default PopularMovies;
