const template = document.createElement("template")
template.innerHTML = `
<style> 
    label {
        color: red;
        display: block;
    }
</style>

<label>
    <input type="checkbox" />
    <slot></slot>
</label>
`

class ToDoEl extends HTMLElement {
    constructor(){
        super()
        const shadow = this.attachShadow({ mode: "open"})
        shadow.append(template.content.cloneNode(true))
        this.checkbox =shadow.querySelector("input")
    }

    static get observedAttributes() {
        return ["checked"]
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "checked") this.updateChecked(newValue)
    }

    updateChecked(value) {
        this.checkbox.checked = value != null && value !== "false"
    }
}

customElements.define('todo-el', ToDoEl)

//Add input filed for toDo el's

//Delete all button