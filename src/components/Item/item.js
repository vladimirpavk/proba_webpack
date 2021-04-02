class Item extends HTMLElement{    

    #shadowRoot = null;
    #template = null;
    #value = null;
    #elementLabel = null;
    #removeButton = null;

    constructor(){
        super();  
        
        this.#shadowRoot = this.attachShadow({mode:'open'});     
    }

    defineTemplate(){
        this.#template = `
            <link rel='stylesheet', href='./src/components/item/item.css'/>
            <div id="element">
                <label class="elementLabel">${this.#value}</label>
                <button class="removeButton">x</button>
            </div>
        `;        
    }

    connectedCallback(){
        this.#value = this.getAttribute('value');
        this.defineTemplate();

        let rootElement = document.createElement('div');
        rootElement.setAttribute('id', 'root');
        rootElement.innerHTML = this.#template;

        this.#shadowRoot.appendChild(rootElement);

        //initialize components
        this.#elementLabel = this.#shadowRoot.querySelector('.elementLabel');
        this.#removeButton = this.#shadowRoot.querySelector('.removeButton');

        //initialize events
        this.#removeButton.addEventListener('click', (eventData)=>{
            let itemRemovedEvent = new CustomEvent('item-removed', {detail: this.#value});
            this.dispatchEvent(itemRemovedEvent);
        });
    }
}

window.customElements.define('it-em', Item);