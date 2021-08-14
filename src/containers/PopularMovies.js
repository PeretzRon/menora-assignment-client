import React, {useEffect} from "react";
import classes from './PopularMovies.module.css';
import MovieCard from "../components/MovieCard/MovieCard";
import imdbApi from "../api/imdbApi";
import {Box, Grid} from "@material-ui/core";

const PopularMovies = () => {
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        imdbApi.getPopularMovies().then(results => {
            setMovies(results);
        });
    }, []);

    const popularMovies = movies.map(movie => {
        return <Grid key={movie.imdbID} item xs={12} sm={6} md={3} xl={3}>
            <MovieCard {...movie}/>
        </Grid>;
    });

    return (
        <Box component="div" className={classes.PopularMovies}>
            <Grid container
                  spacing={1}
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                {popularMovies}
            </Grid>
        </Box>
    );
};

export default PopularMovies;
