import * as ItemPicker from './src/components/itemPicker/itemPicker.js';
import * as Item from './src/components/Item/item.js';

//import { elementsArray } from './src/storage/storage.js';
//import { storage } from './src/storage/storage.js';
import * as Storage from './src/storage/storage.js';

const rootElement = document.getElementById('root');

let arrayElements = document.createElement('div');
arrayElements.setAttribute('class', 'arrayElements');

//initialize storage
let storage = document.createElement('stor-age');
storage.addEventListener('storage-changed', (eventData)=>{    
    console.log('Storage changed event...', eventData.detail);
});
storage.addEventListener('item-added', (eventData)=>{
    console.log('Item added to storage...', eventData.detail);

    let newItem = document.createElement('it-em');
    newItem.setAttribute('index', eventData.detail.id);
    newItem.setAttribute('value', eventData.detail.value);
    newItem.addEventListener('item-clicked', (eventData)=>{
        console.log(eventData.detail);        
        storage.removeItem(eventData.detail.id);
        arrayElements.removeChild(newItem);
    });
    arrayElements.appendChild(newItem);
});

let itemPicker = document.createElement('item-picker');
itemPicker.addEventListener('itempicked', (eventData)=>{       
    storage.addItem(eventData.detail);  
});

rootElement.appendChild(itemPicker);

let contentLabel = document.createElement('label');
contentLabel.setAttribute('class', 'contentLabel');
contentLabel.innerText = 'Selected items:'

rootElement.appendChild(contentLabel);

rootElement.appendChild(arrayElements);

