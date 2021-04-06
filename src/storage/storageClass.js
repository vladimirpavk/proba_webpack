class StorageClass extends HTMLElement{

    #storage = [];

    constructor(){
        super();
    }

    addItem = (item)=>{
        this.#storage.push(item);
        this.dispatchEvent(new CustomEvent('item-added', {detail: item}));
        this.dispatchEvent(new CustomEvent('storage-changed', {detail:this.#storage}));
    }
}

window.customElements.define('stor-age', StorageClass);