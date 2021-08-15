import './App.css';
import Header from "./components/Header/Header";
import PopularMovies from "./containers/PopularMovies/Movies";
import {StylesProvider} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import SearchBar from "./components/SearchBar/SearchBar";
import Body from "./containers/Body/Body";

function App() {
    return (
        <StylesProvider injectFirst>
            <Box component="div" className="App">
                <Header/>
                <Body/>
            </Box>
        </StylesProvider>
    );
}

export default App;
