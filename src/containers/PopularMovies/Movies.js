import React from "react";
import classes from './Movies.module.css';
import MovieCard from "../../components/MovieCard/MovieCard";
import {Box, Grid} from "@material-ui/core";
import MoreDetailsDialog from "../../components/MovieMoreDetails/MoreDetailsDialog";

const Movies = props => {
    const [moreDetailsDialog, setMoreDetailsDialog] = React.useState({
        isOpen: false,
        selectedMovie: null,
    });

    const onMovieCardClickAction = id => {
        const selectedMovie = props.movies.find(movie => movie.imdbID === id);
        setMoreDetailsDialog({...moreDetailsDialog, isOpen: true, selectedMovie: selectedMovie});
    };

    const onDialogClose = () => {
        setMoreDetailsDialog({...moreDetailsDialog, isOpen: false, selectedMovie: null});
    };

    const popularMovies = props.movies.map(movie => {
        return <Grid key={movie.imdbID}
                     item
                     xs={12} sm={6} md={3} xl={3}
                     onClick={() => onMovieCardClickAction(movie.imdbID)}>
            <MovieCard {...movie}/>
        </Grid>;
    });

    return (
        <Box component="div" className={classes.movies}>
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

export default Movies;
