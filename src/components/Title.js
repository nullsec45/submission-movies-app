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
                <div>TONTON FILM</div>
                <div>DIMANA AJA, KAPAN AJA</div>
        `;
        // this.shadowDOM.classList.add("");
    }
}

customElements.define('title-element', TitleElement);
