import Movies from "./data/movies";
import Event from "./events/event";

class App {
    constructor() {
        Movies.trending();
        Movies.popular();
        Event.searchEvent();
        Event.navbarActiveEvent();
        Event.movieDetailEvent();
    }
}

export default App;