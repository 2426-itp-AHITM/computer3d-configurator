import { html, render } from "lit-html"
import { loadAllCPUs } from "./cpu-service"
import { CPU } from "src/model"


const tableTemplate = (cpus: CPU[]) => {
    const data = cpus.map(cpu =>
        html`
        <div class="CpuContainer">
    <div class="CpuDetails">
        <p class="CpuName"><strong>${cpu.name}</strong></p>
        <div class="ContentWrapper">
            <div class="Image">
                <img src="https://m.media-amazon.com/images/I/61IIbwz-+ML._AC_UY327_QL65_.jpg" alt="${cpu.name}">
            </div>
            <div class="Info">
                <p>Preis: ${cpu.price}</p>
                <p>Sockel: ${cpu.socket}</p>
                <button class="addButton">Hinzufügen</button>
            </div>
        </div>
    </div>
</div>        
        `
    )
    return html`
            ${data}
    <style>
       .CpuContainer {
        background-color: rgba(0, 0, 0, 0.409);
        color: white;
        padding: 1vw;
        margin: 1vw;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .CpuDetails {
        display: flex;
        flex-direction: column;
    }

    .CpuName {
        font-size: 1.5vw;
        margin-bottom: 1vw;
    }

    .ContentWrapper {
        display: flex;
        align-items: center;
    }

    .Image img {
        width: 10vw;
        height: auto;
        margin-right: 1.5vw;
    }

    .Info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .addButton {
        background-color: black;
        color: white;
        border: none;
        padding: 0.8vw 1.5vw;
        font-size: 1vw;
        cursor: pointer;
        border-radius: 1vw;
        margin-top: 1vw;
    }

    .addButton:hover {
        background-color: #444;
    }
    </style>
`
}
class CpuComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }
    async connectedCallback() {
        const cpus = await loadAllCPUs()
        render(tableTemplate(cpus), this.shadowRoot)
        //const head = this.shadowRoot.querySelector("head")
        //console.log("head is", head)
    }
}
customElements.define("cpu-component", CpuComponent)