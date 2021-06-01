import * as ItemPicker from './src/components/itemPicker/itemPicker.js';
import * as Item from './src/components/Item/item.js';
import * as Storage from './src/storage/storage.js';

import * as RandomMath from 'js-combperm';

import * as ModalDialog from './src/components/modalDialog/modalDialog.js';
import * as ModalSpinner from './src/components/modalSpinner/modalSpinner.js';
const rootElement = document.getElementById('root');

let arrayElements = document.createElement('div');
arrayElements.setAttribute('class', 'arrayElements');

let combSelectDiv = document.getElementById('selector');

let submitButton = document.getElementById('submitButton');

//initialize storage
let storage = document.createElement('stor-age');
storage.addEventListener('storage-changed', (eventData)=>{    
    //console.log('Storage changed event...', eventData.detail);
    if(eventData.detail.length!==0){
        combSelectDiv.style.display = 'block';
    }
    else{
        combSelectDiv.style.display = 'none';
    }
});
storage.addEventListener('item-added', (eventData)=>{
    //console.log('Item added to storage...', eventData.detail);

    let newItem = document.createElement('it-em');
    newItem.setAttribute('index', eventData.detail.id);
    newItem.setAttribute('value', eventData.detail.value);
    newItem.addEventListener('item-clicked', (eventData)=>{
        //console.log(eventData.detail);        
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

let strictSelectForm = document.getElementById('strictSelect');

let combSelectForm = document.getElementById('combSelect');
combSelectForm.addEventListener('change', (eventData)=>{  
    if(
        eventData.target.value==='combineStrict' ||
        eventData.target.value==="forward" ||
        eventData.target.value==="backward" ||
        Number.isInteger(+eventData.target.value) ||
        eventData.target.value==="on"
        )
    {
        strictSelectForm.style.display = 'block';
    }
    else{
        strictSelectForm.style.display = 'none';
    }
});

let modal1 = document.getElementById('dialogCalculate');
let modal2 = document.getElementById('dialogPopulate');

let labelCalculate = document.getElementById('calculationTime');
let labelPopulate = document.getElementById('textAreaPopulationtime');

const onFormSubmit = (formData)=>{  
    formData.preventDefault();

    console.log('modal1.open()');
    modal1.addEventListener('DialogOpened', ()=>{
        console.log('DalogOpened...');
        let newFormData = new FormData(formData.target);   
        let itt = newFormData.entries();  
    
        let nextValue = itt.next();    
        let formObject = {};
    
        while(!nextValue.done){     
            formObject[nextValue.value[0]] = nextValue.value[1];
            nextValue = itt.next();                        
        }
    
        let newFormObject = {};
    
        if(formObject.strict){
            newFormObject = {...formObject, strict: true}
        }
        else{
            newFormObject = {...formObject, strict: false}
        }
    
        //console.log(newFormObject, storage.container(), storage.containerValues());
        //open modal dialog
        let resultArray = [];
        
        let timeCalcStart = performance.now();
    
        switch(newFormObject.combType){
            case "heapPerm":{
                resultArray = RandomMath.heapPerm(storage.containerValues());
                break;
            }
            case "heapPermIterative":{
                resultArray = RandomMath.heapPermIterative(storage.containerValues());
                break;
            }
            case "combine":{
                resultArray = RandomMath.combAll(storage.containerValues(), 'f');
                break;
            }
            case "combineStrict":{
                //strictForm = forward | backward
                //length
                //strict = true | false
                let strictFormChar = newFormObject.strictForm === forward ? 'f' : 'b';
                resultArray = RandomMath.combAllStrict(
                    storage.containerValues(),
                    strictFormChar,
                    newFormObject.length,
                    newFormObject.strict);
                break;
            }
        }
     
        let timeCalcEnd = performance.now();
        let htmlCalculate = 'Calculated in ' + '<p style="display:inline-block; color:red;">' + (timeCalcEnd-timeCalcStart).toFixed(3) + '</p>' + 'ms.';
        labelCalculate.innerHTML = htmlCalculate;
        let timePopulateStart = performance.now();
    
        let stringOfArrays = '';
        resultArray.forEach(element => {
            stringOfArrays += element+'\n';
        });
    
        let resultBox = document.getElementById('resultBox');
        resultBox.value = stringOfArrays;
        
        let timePopulateEnd = performance.now();  
        let htmlTimePopulate = 'Populated in ' +  '<p style="display:inline-block; color:red;">' + (timePopulateEnd - timePopulateStart).toFixed(3) + '</p>' + 'ms.';
        labelPopulate.innerHTML = htmlTimePopulate;

        modal1.close();
    });
    modal1.open();   
}

const onFormSubmit2 = (eventData)=>{
    console.log('Form submit...');
    eventData.preventDefault();
    if(!isOpened) modal1.open();
    else modal1.close();
}

combSelectForm.addEventListener('submit', onFormSubmit);

let isOpened = false;