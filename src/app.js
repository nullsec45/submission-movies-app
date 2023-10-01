import Movies from "./data/movies";

class App {
    constructor() {
        Movies.trending();
        Movies.popular();
    }
}

export default App;