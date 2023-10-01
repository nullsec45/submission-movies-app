class ButtonElement extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
                 <button></button>
        `;
        // this.shadowDOM.classList.add("");
    }
}

customElements.define('button-element', ButtonElement);
