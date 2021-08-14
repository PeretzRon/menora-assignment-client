import React, {useEffect} from "react";
import classes from './PopularMovies.module.css';
import MovieCard from "../components/MovieCard/MovieCard";
import imdbApi from "../api/imdbApi";
import {Box, Grid} from "@material-ui/core";
import MoreDetailsDialog from "../components/MovieMoreDetails/MoreDetailsDialog";

const PopularMovies = () => {
    const [movies, setMovies] = React.useState([]);
    const [moreDetailsDialog, setMoreDetailsDialog] = React.useState({
        isOpen: false,
        selectedMovie: null,
    });

    useEffect(() => {
        imdbApi.getPopularMovies().then(results => {
            setMovies(results);
        });
    }, []);

    const onMovieCardClickAction = id => {
        const selectedMovie = movies.find(movie => movie.imdbID === id);
        setMoreDetailsDialog({...moreDetailsDialog, isOpen: true, selectedMovie: selectedMovie});
    };

    const onDialogClose = () => {
        setMoreDetailsDialog({...moreDetailsDialog, isOpen: false, selectedMovie: null});
    };

    const popularMovies = movies.map(movie => {
        return <Grid key={movie.imdbID}
                     item
                     xs={12} sm={6} md={3} xl={3}
                     onClick={() => onMovieCardClickAction(movie.imdbID)}>
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
            {moreDetailsDialog.isOpen && <MoreDetailsDialog
                onClose={onDialogClose}
                dialogMoreDetails={moreDetailsDialog}/>}
        </Box>
    );
};

export default PopularMovies;
