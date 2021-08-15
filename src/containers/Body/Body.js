import React, {useEffect, useState} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Movies from "../Movies/Movies";
import imdbApi from "../../api/imdbApi";

let popularMovies = [];
const Body = () => {

    const [movies, setMovies] = useState([]);
    const [showAdditionalComponent, setShowAdditionalComponent] = useState({
        showBackButton: false,
        showLoading: false
    });
    const handleSearch = (event, input) => {
        event.preventDefault();
        setShowAdditionalComponent({...showAdditionalComponent, showLoading: true});
        if (input === '') return; // no input, do nothing
        imdbApi.getMoviesByText(input)
            .then(searchResultsMovies => {
                setMovies(searchResultsMovies);
            }).finally(reason => {
            setShowAdditionalComponent({...showAdditionalComponent, showBackButton: true, showLoading: false});
        });
    };

    const handleBack = () => {
        setMovies([...popularMovies]);
        setShowAdditionalComponent({...showAdditionalComponent, showBackButton: false});
    };

    useEffect(() => {
        imdbApi.getPopularMovies().then(results => {
            setMovies(results);
            popularMovies = results;
        });
    }, []);

    return (
        <>
            <SearchBar
                onClickSearch={handleSearch}
                onBackAction={handleBack}
                showLoading={showAdditionalComponent.showLoading}
                showBackButton={showAdditionalComponent.showBackButton}/>
            <Movies movies={movies}/>
        </>
    );
};

export default Body;
