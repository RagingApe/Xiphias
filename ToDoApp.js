class ToDoItem extends HTMLElement {
    constructor(){
        super()
        const shadow = this.attachShadow({ mode: "open"})
        this.innerHTML = `<h3>${this.innerText}</h3>`
    }
}

customElements.define('todo-el', ToDoItem)