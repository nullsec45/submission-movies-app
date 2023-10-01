import { IMAGE_URL, MAX_BODY_LENGTH } from "../helper/constant.js";
import { maxBody } from "../helper/max-body.js";


class View {
    static trendingView(data) {
        const trendingCard = document.getElementById("trending-card-container");
        data.results.forEach(movie => {
            trendingCard.insertAdjacentHTML('beforeend', `
            <div class="col-lg-4 mt-4">
                    <div class="card">
                        <img src="${IMAGE_URL}${movie.poster_path}" class="card-img-top" alt="${movie.poster_path}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${maxBody(movie.overview, MAX_BODY_LENGTH)}</p>
                        </div>
                        <div class="card-footer text=center">
                            <a href="#" class="btn btn-primary text-center d-flex justify-content-center">Show More</a>
                        </div>
                    </div>
                </div>
            `);
        })
    }

    static popularView(data) {
        const popularCard = document.getElementById("popular-card-container");
        data.results.forEach(popular => {
            popularCard.insertAdjacentHTML('beforeend', `
            <div class="col-lg-4 mt-4">
                    <div class="card">
                        <img src="${IMAGE_URL}${popular.poster_path}" class="card-img-top" alt="${popular.poster_path}">
                        <div class="card-body">
                            <h5 class="card-title">${popular.title}</h5>
                            <p class="card-text">${maxBody(popular.overview, MAX_BODY_LENGTH)}</p>
                        </div>
                        <div class="card-footer text=center">
                            <a href="#" class="btn btn-primary text-center d-flex justify-content-center">Show More</a>
                        </div>
                    </div>
                </div>
            `);
        })
    }
}

export default View;