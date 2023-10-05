import { BASE_URL, API_KEY } from "../helper/constant.js";
import View from "../views/main.js";


class Movies {
    static async trending() {
        const res = await fetch(`${BASE_URL}/trending/movie/day?language=id_ID&api_key=${API_KEY}&page=2`);

        try {
            const json = await res.json();
            View.trendingView(json);
        } catch (error) {
            console.log(error);
        }
    }

    static async popular() {
        const res = await fetch(`${BASE_URL}/movie/popular?language=en-US&api_key=${API_KEY}&page=2`);

        try {
            const json = await res.json();
            View.popularView(json);
        } catch (error) {
            console.log(error);
        }
    }

    static async search(title) {
        const res = await fetch(`${BASE_URL}/search/movie?query=${title.value}&language=en-US&api_key=${API_KEY}&page=1`);

        try {
            const json = await res.json();
            View.searchView(json, title);
        } catch (error) {
            console.log(error);
        }
    }

    static async movieDetail(id) {
        const res = await fetch(`${BASE_URL}/movie/${id}?language=en-US&api_key=${API_KEY}`);

        try {
            const json = await res.json();
            View.movieDetailView(json);
        } catch (error) {
            console.log(error);
        }
    }
}

export default Movies;