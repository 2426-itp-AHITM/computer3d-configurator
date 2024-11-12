import { html, render } from "lit-html"
import { loadAllCPUs } from "./cpu-service"
import { CPU } from "src/model"

const tableTemplate = (cpus: CPU[]) => {
    const rows = cpus.map(cpu => 
        html`
            <tr>
            <th>${cpu.cpu_id}</th>
            <th>${cpu.name}</th>
            <th>${cpu.price}</th> 
            <th>${cpu.socket}</th>         
            </tr>
        `
    )
    return html`
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Socket</th>
            </tr>
        </thead>
        <tbody>
            ${rows}
        </tbody>
    </table>
`
}
class CpuComponent extends HTMLElement {
    async connectedCallback() {
        const todos = await loadAllCPUs()
        render(tableTemplate(todos), this)
    }
}
customElements.define("cpu-component", CpuComponent)