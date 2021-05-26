class ModalSpinner extends HTMLElement{
    #templateHTML = `
        <mo-dal canclose="false" id="modal1">           
            <slot class="slot1" name="text" slot="slot1"></slot>
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
        this.#mainElement.appendChild(contentTemplate.content);     
        this.#shadowRoot.appendChild(this.#mainElement);

        this.#modalDialog = this.#shadowRoot.getElementById('modal1');        
    }

    open(){
        this.#modalDialog.setAttribute('opened', 'true');
    }

    close(){
        this.#modalDialog.setAttribute('opened', 'false');
    }
}

export default ModalSpinner;

window.customElements.define('modal-spinner', ModalSpinner);