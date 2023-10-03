class TitleElement extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
                <div>WATCH A MOVIE</div>
                <div>ANYWHERE, ANYTIME</div>
        `;
        // this.shadowDOM.classList.add("");
    }
}

customElements.define('title-element', TitleElement);
