import Movies from "../data/movies";

class Event {
    static searchEvent() {
        const search = document.getElementById("search_button");
        const title = document.getElementById("title");

        search.addEventListener("click", function () {
            Movies.search(title);
        });
    }

    static navbarActive() {
        const navbar_nav = document.querySelectorAll("#navbarNav .navbar-nav li.nav-item");

        navbar_nav.forEach(item => {
            item.addEventListener("click", function () {
                const kategori_aktif = document.querySelector("#navbarNav .navbar-nav li.nav-item a.active");
                kategori_aktif.className = kategori_aktif.className.replace(" active", "");
                this.firstElementChild.className += " active";
            })
        })
    }
}

export default Event;