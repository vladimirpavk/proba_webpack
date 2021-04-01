class ItemPicker extends HTMLElement{

    #shadowRoot = null;
    #template = '';
    #elementsComponent = null;
    #inputElement = null;
    #arrayElement = null;
    #addButton = null;
    #errorLabel = null;

    //custom events
    itemPicked = null;

    constructor(){
        super();
    }

    defineTemplate(){
        this.#template = `
            <link rel='stylesheet', href='./src/components/itemPicker/itemPicker.css'/>
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
        this.#shadowRoot = this.attachShadow({mode:'open'});
        this.defineTemplate();
        
        const rootElement = document.createElement('div');
        rootElement.setAttribute('id', 'rootElement');
        rootElement.innerHTML = this.#template;

        this.#shadowRoot.appendChild(rootElement);

        this.#elementsComponent = this.#shadowRoot.querySelector('.elementsComponent');
        this.#inputElement = this.#shadowRoot.querySelector('.inputElement');
        this.#arrayElement = this.#shadowRoot.querySelector('.arrayElement');
        this.#addButton = this.#shadowRoot.querySelector('#addButton');
        this.#errorLabel = this.#shadowRoot.querySelector('.error');
       
        //initialize event handlers
        this.#arrayElement.addEventListener('keypress', (eventData)=>{            
            if(eventData.key==='Enter') this._addValue();
        });

        this.#addButton.addEventListener('click', (eventData)=>{ 
            this._addValue();
        });                        
    }

    _addValue = () =>{
        if(this.#arrayElement.value==''){
            this.#errorLabel.style.display = 'block';
            this.#arrayElement.focus();
        }
        else{
            this.#errorLabel.style.display = 'none';

            this.itemPicked = new CustomEvent('itempicked', { detail: this.#arrayElement.value });
            this.dispatchEvent(this.itemPicked);          

            this.#arrayElement.value='';
            this.#arrayElement.focus();
        }
    }        
}

window.customElements.define('item-picker', ItemPicker);