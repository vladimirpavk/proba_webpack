class Storage extends HTMLElement{

    #storage = [];

    constructor(){
        super();
    }

    uuidv4 = ()=>{
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }

    addItem = (value)=>{
        let newItem = {
            id: this.uuidv4(),
            value: value
        };
        this.#storage.push(newItem);

        this.dispatchEvent(new CustomEvent('item-added', {detail: newItem}));
        this.dispatchEvent(new CustomEvent('storage-changed', {detail:this.#storage}));
    }

    removeItem = (id)=>{
        let removedItem = null;
        let filteredArray = this.#storage.filter(
            (item)=>{
                if(item.id===id){
                    removedItem = item;
                    return false;
                }
                return true;
            }
        );
        this.#storage = [...filteredArray];

        this.dispatchEvent(new CustomEvent('item-removed', { detail:removedItem }));
        this.dispatchEvent(new CustomEvent('storage-changed', { detail:this.#storage }));
    }
}

window.customElements.define('stor-age', Storage);