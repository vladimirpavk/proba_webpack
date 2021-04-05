export class StorageClass{
    
    constructor(){
        this.#storage = [];
    }

    addItem = (item)=>{
        this.#storage.push(item);
        this.dispatchEvent(new CustomEvent('item-added'), {detail: item});
        this.dispatchEvent(new CustomEvent('storage-changed'), {detail:this.#storage});
    }
}