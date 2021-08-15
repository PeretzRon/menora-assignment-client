import React, {useEffect, useState} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Movies from "../PopularMovies/Movies";
import imdbApi from "../../api/imdbApi";

let popularMovies = [];
const Body = () => {

    const [movies, setMovies] = useState([]);
    const [showBack, setShowBack] = useState(false);
    const handleSearch = (event, input) => {
        event.preventDefault();
        if (input === '') return; // no input, do nothing
        imdbApi.getMoviesByText(input).then(searchResultsMovies => {
            setMovies(searchResultsMovies);
            setShowBack(true);
        });
    };

    const handleBack = () => {
        setMovies([...popularMovies]);
        setShowBack(false);
    };

    useEffect(() => {
        imdbApi.getPopularMovies().then(results => {
            console.log(results);
            setMovies(results);
            popularMovies = results;
        });
    }, []);

    return (
        <>
            <SearchBar
                onClickSearch={handleSearch}
                onBackAction={handleBack}
                showBackButton={showBack}/>
            <Movies movies={movies}/>
        </>
    );
};

export default Body;
