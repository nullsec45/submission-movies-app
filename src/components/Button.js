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
                 <a href="#search"></a>
        `;
        // this.shadowDOM.classList.add("");
    }
}

customElements.define('button-element', ButtonElement);
