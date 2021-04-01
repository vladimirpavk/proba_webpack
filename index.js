import * as ItemPicker from './src/components/itemPicker/itemPicker.js';
import { elementsArray } from './src/storage/storage.js';

const rootElement = document.getElementById('root');

let itemPicker = document.createElement('item-picker');
itemPicker.addEventListener('itempicked', (eventData)=>{    
    console.log(eventData.detail);
})

console.log(elementsArray);

rootElement.appendChild(itemPicker);