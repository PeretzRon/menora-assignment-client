import './App.css';
import Header from "./components/Header/Header";
import PopularMovies from "./containers/PopularMovies";
import {StylesProvider} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

function App() {
    return (
        <StylesProvider injectFirst>
            <Box component="div" className="App">
                <Header/>
                <PopularMovies/>
            </Box>
        </StylesProvider>
    );
}

export default App;
