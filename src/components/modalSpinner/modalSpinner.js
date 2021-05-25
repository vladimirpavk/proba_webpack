class ModalSpinner extends HTMLElement{
    #templateHTML = `
        <mo-dal canclose="false" id="modal1">           
            <slot class="slot1" name="text"></slot>
            <div class="loader" slot="slot1">
        </mo-dal>
    `

    #shadowRoot;    
    #mainElement;
    #modalDialog;

    constructor(){
        super();

        this.#shadowRoot = this.attachShadow({mode:'closed'});        

        this.render();
    }

    render(){
        let linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('href', './src/components/modalSpinner/modalSpinner.css');
        this.#shadowRoot.appendChild(linkElement);
        
        let contentTemplate = document.createElement('template');
        contentTemplate.innerHTML = this.#templateHTML;

        this.#mainElement = document.createElement('div');       
        this.#mainElement.setAttribute('id', 'main_element') ;     
        this.#mainElement.setAttribute('class', 'main_element');
        this.#mainElement.appendChild(contentTemplate.content);     
        this.#shadowRoot.appendChild(this.#mainElement);

        this.#modalDialog = this.#shadowRoot.getElementById('modal1');
        this.#modalDialog.setAttribute('closed', 'true');
    }

    open(){
        this.#modalDialog.setAttribute('closed', 'false');
    }

    close(){
        this.#modalDialog.setAttribute('closed', 'true');
    }
}

export default ModalSpinner;

window.customElements.define('modal-spinner', ModalSpinner);