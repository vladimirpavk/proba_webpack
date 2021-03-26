/* import * as Main from './simple_src/main.js';

//console.log(Main.sumWith5(12));
document.getElementById('my_number').innerHTML = Main.sumWith5(12); */

let arrayOfElements = [];

let inputElement = document.getElementById('arrayElement');
let addButton = document.getElementById('addButton');
let errorLabel = document.getElementById('errorLabel');

inputElement.addEventListener('keypress', (eventData)=>{
    //console.log(eventData);
    if(eventData.key==='Enter') addValue();
});

addButton.addEventListener('click', (eventData)=>{
   addValue();
});

const addValue = () =>{
    if(inputElement.value==''){
        errorLabel.style.display = 'block';
        inputElement.focus();
    }
    else{
        errorLabel.style.display = 'none';
        arrayOfElements.push(inputElement.value);
        inputElement.value='';
        inputElement.focus();
        //console.log(arrayOfElements);
    }
}