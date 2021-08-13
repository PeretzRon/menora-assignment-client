import './App.css';
import Header from "./components/Header/Header";
import PopularMovies from "./containers/PopularMovies";

function App() {
    return (
        <div className="App">
            <Header/>
            <PopularMovies/>
        </div>
    );
}

export default App;
