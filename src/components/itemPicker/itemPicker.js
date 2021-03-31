class ItemPicker extends HTMLElement{

    _shadowRoot;
    _template;

    constructor(){
        super();
    }

    defineTemplate(){
        this._template = `
            <link rel='stylesheet', href='./itemPicker.css'/>
            <div class="elementsComponent">
                <div class="inputElement">
                    <label for="arrayElement">Item</label>
                    <input id="arrayElement" name="arrayElement" class="arrayElement" type="text" maxlength="1" size="1"/>
                    <button id="addButton">+</button>                        
                    <label id="errorLabel" class="error">* Value can not be empty...</label>
                </div>               
            </div>            
        `;        
    }

    connectedCallback(){
        this._shadowRoot = this.attachShadow({mode:'closed'});
        this.defineTemplate();
        
        const rootElement = document.createElement('div');
        rootElement.setAttribute('id', 'rootElement');
        rootElement.innerHTML = this._template;

        this._shadowRoot.appendChild(rootElement);

        this._elementsComponent = document.querySelector('#elementsComponent');
        this._inputElement = document.querySelector('#inputElement');
        this._arrayElement = document.querySelector('#arraylement');
        this._addButton = document.querySelector('.addButton');
        this.errorLabel = document.querySelector('#error');
    }

    render(){

    }
}

window.customElements.define(item-ItemPicker, ItemPicker);