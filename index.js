import * as ItemPicker from './src/components/itemPicker/itemPicker.js';
import * as Item from './src/components/Item/item.js';

//import { elementsArray } from './src/storage/storage.js';
//import { storage } from './src/storage/storage.js';
import * as Storage from './src/storage/storageClass.js';

const rootElement = document.getElementById('root');
let arrayElements = document.createElement('div');

let storage = document.createElement('stor-age');
storage.addEventListener('storage-changed', (eventData)=>{    
    console.log('Storage changed event...', eventData.detail);
});
storage.addEventListener('item-added', (eventData)=>{
    console.log('Item added...', eventData.detail);
});

let itemPicker = document.createElement('item-picker');
itemPicker.addEventListener('itempicked', (eventData)=>{    
   
    storage.addItem(eventData.detail);

    let newItem = document.createElement('it-em');
    newItem.setAttribute('value', eventData.detail);
    newItem.addEventListener('item-removed', (eventData)=>{
        console.log(eventData);
    });
    arrayElements.appendChild(newItem);
});

rootElement.appendChild(itemPicker);
rootElement.appendChild(arrayElements); 

/* const rootElement = document.getElementById('root');

let arrayElements = document.createElement('div');

let itemPicker = document.createElement('item-picker');
itemPicker.addEventListener('itempicked', (eventData)=>{    
    elementsArray.push(eventData.detail);
    console.log(elementsArray);

    let newItem = document.createElement('it-em');
    newItem.setAttribute('value', eventData.detail);
    newItem.addEventListener('item-removed', (eventData)=>{
        console.log(eventData);
    });
    arrayElements.appendChild(newItem);
});

rootElement.appendChild(itemPicker);
rootElement.appendChild(arrayElements); */