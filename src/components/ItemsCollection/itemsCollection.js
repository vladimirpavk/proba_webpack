class ItemsCollection extends HTMLElement{
    
    #shadowRoot = null;
    #template = null;
 
    #collection = null;

    constructor(){
        super();
        this.#shadowRoot = this.attachShadow({mode:'closed'});
    }

    defineTemplate(){
        this.#template = `
                <link rel='stylesheet', href='./src/components/item/item.css'/>
                <div id="collection">                   
                </div>
            `;                
    }

    connectedCallback(){
        this.defineTemplate();

        let rootElement = document.createElement('div');
        rootElement.setAttribute('id', 'root');
        rootElement.innerHTML = this.#template;

        this.#shadowRoot.appendChild(rootElement);    
        
        this.#collection = this.#shadowRoot.querySelector('#collection');
    }

    addItem(item){
        //this.#collection.innerHTML = ?
        let newItem = document.createElement('it-em');
        newItem.setAttribute('index', item.id);
        newItem.setAttribute('value', item.value);

        this.#collection.appendChild(newItem);

    }

    removeItem(){

    }

}