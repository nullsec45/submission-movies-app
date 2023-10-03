import Movies from "./data/movies";
import Event from "./events/event";

class App {
    constructor() {
        Movies.trending();
        Movies.popular();
        Event.searchEvent();
        Event.navbarActive();
    }
}

export default App;