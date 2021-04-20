/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_itemPicker_itemPicker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components/itemPicker/itemPicker.js */ \"./src/components/itemPicker/itemPicker.js\");\n/* harmony import */ var _src_components_itemPicker_itemPicker_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_itemPicker_itemPicker_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_Item_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/Item/item.js */ \"./src/components/Item/item.js\");\n/* harmony import */ var _src_components_Item_item_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_Item_item_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_storage_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/storage/storage.js */ \"./src/storage/storage.js\");\n/* harmony import */ var _src_storage_storage_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_storage_storage_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_combperm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-combperm */ \"./node_modules/js-combperm/lib/es/comb.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(js_combperm__WEBPACK_IMPORTED_MODULE_3__);\r\n\r\nconst rootElement = document.getElementById('root');\r\n\r\nlet arrayElements = document.createElement('div');\r\narrayElements.setAttribute('class', 'arrayElements');\r\n\r\nlet combSelectDiv = document.getElementById('selector');\r\n\r\nlet submitButton = document.getElementById('submitButton');\r\n\r\n//initialize storage\r\nlet storage = document.createElement('stor-age');\r\nstorage.addEventListener('storage-changed', (eventData)=>{    \r\n    console.log('Storage changed event...', eventData.detail);\r\n    if(eventData.detail.length!==0){\r\n        combSelectDiv.style.display = 'block';\r\n    }\r\n    else{\r\n        combSelectDiv.style.display = 'none';\r\n    }\r\n});\r\nstorage.addEventListener('item-added', (eventData)=>{\r\n    console.log('Item added to storage...', eventData.detail);\r\n\r\n    let newItem = document.createElement('it-em');\r\n    newItem.setAttribute('index', eventData.detail.id);\r\n    newItem.setAttribute('value', eventData.detail.value);\r\n    newItem.addEventListener('item-clicked', (eventData)=>{\r\n        console.log(eventData.detail);        \r\n        storage.removeItem(eventData.detail.id);\r\n        arrayElements.removeChild(newItem);\r\n    });\r\n    arrayElements.appendChild(newItem);\r\n});\r\n\r\nlet itemPicker = document.createElement('item-picker');\r\nitemPicker.addEventListener('itempicked', (eventData)=>{       \r\n    storage.addItem(eventData.detail);  \r\n});\r\n\r\nrootElement.appendChild(itemPicker);\r\n\r\nlet contentLabel = document.createElement('label');\r\ncontentLabel.setAttribute('class', 'contentLabel');\r\ncontentLabel.innerText = 'Selected items:'\r\n\r\nrootElement.appendChild(contentLabel);\r\nrootElement.appendChild(arrayElements);\r\n\r\nlet strictSelectForm = document.getElementById('strictSelect');\r\n\r\nlet combSelectForm = document.getElementById('combSelect');\r\ncombSelectForm.addEventListener('change', (eventData)=>{\r\n    console.log(eventData.target.value);\r\n   /*  switch(eventData.target.value){\r\n        case \"heapPerm\": {\r\n            break;\r\n        }\r\n        case \"heapPermIterative\":{\r\n            break;\r\n        }\r\n        case \"combine\":{\r\n            break;\r\n        }\r\n        case \"combineStrict\":{\r\n            break;\r\n        }\r\n    } */    \r\n    if(eventData.target.value==='combineStrict'){\r\n        strictSelectForm.style.display = 'block';\r\n    }\r\n    else{\r\n        strictSelectForm.style.display = 'none';\r\n    }\r\n});\r\n\r\nconst onFormSubmit = (formData)=>{\r\n    formData.preventDefault();\r\n    let newFormData = new FormData(formData.target);   \r\n    let itt = newFormData.entries();  \r\n\r\n    let nextValue = itt.next();    \r\n    let formObject = {};\r\n\r\n    while(!nextValue.done){\r\n        //console.log(nextValue.value[1]);\r\n        formObject[nextValue.value[0]] = nextValue.value[1];\r\n        nextValue = itt.next();                        \r\n    }\r\n\r\n    console.log(formObject);\r\n}\r\n\r\nconst dispatchOperation = (dataObject)=>{\r\n    switch(dataObject){\r\n        case \"dataObject\":{\r\n            break;\r\n        }\r\n    }\r\n}\r\n\r\ncombSelectForm.addEventListener('submit', onFormSubmit);\n\n//# sourceURL=webpack://proba_webpack/./index.js?");

/***/ }),

/***/ "./node_modules/js-combperm/lib/es/comb.js":
/*!*************************************************!*\
  !*** ./node_modules/js-combperm/lib/es/comb.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"heapPerm\": () => (/* binding */ heapPerm),\n/* harmony export */   \"heapPermIterative\": () => (/* binding */ heapPermIterative),\n/* harmony export */   \"combAll\": () => (/* binding */ combAll),\n/* harmony export */   \"combAllStrict\": () => (/* binding */ combAllStrict)\n/* harmony export */ });\nconst {\r\n    isEven,\r\n    stringAND\r\n} = require('./utils.js');\r\n\r\n/*---------------------------------------------------------------\r\n    Heap algorithm - recursive - permutations without repetition   \r\n-----------------------------------------------------------------*/\r\n\r\n/**\r\n * Return an array of array of single permutation.\r\n * @param {anyArray} array Array of elements subject of permutation\r\n */\r\nconst heapPerm = (anyArray)=>{\r\n    let pointer = anyArray.length;\r\n    return heapPermMain(pointer, anyArray);\r\n}\r\n\r\n/*\r\n    Utility function, not exported. Should only be called inside of a module (heapPerm method).\r\n*/\r\nconst heapPermMain = (pointer, anyArray, newArray = [])=>{\r\n    if(pointer==1){\r\n       // console.log(anyArray)\r\n        newArray.push([...anyArray]);\r\n    }\r\n    else{\r\n        heapPermMain(pointer - 1, anyArray, newArray);\r\n\r\n        for(let i=0; i<pointer-1; i++){\r\n            if(isEven(pointer)){\r\n                //swap(a[0]) i a[k-1]\r\n                let temp = anyArray[pointer-1];\r\n                anyArray[pointer-1] = anyArray[0];\r\n                anyArray[0] = temp;\r\n            }\r\n            else{\r\n                //swap(a[i]) i a[k-1]\r\n                let temp = anyArray[pointer-1];\r\n                anyArray[pointer-1] = anyArray[i];\r\n                anyArray[i] = temp;\r\n            }\r\n            heapPermMain(pointer - 1, anyArray, newArray);\r\n        }\r\n    }\r\n    return newArray;\r\n}\r\n\r\n\r\n/*-------------------------------------------------------------------\r\n    Heap algorithm - iterative - permutations without repetition    \r\n---------------------------------------------------------------------*/\r\n\r\n/**\r\n * @param {array} anyArray Array of elements subject to permutations \r\n */\r\nconst heapPermIterative = (anyArray)=>{\r\n    let pointer = anyArray.length;\r\n\r\n    let result = [];\r\n\r\n    let c = [];\r\n    for(let i=0; i<pointer; i++) c[i]=0;\r\n\r\n    //console.log(anyArray);\r\n    result.push([...anyArray]);\r\n\r\n    let i=0;\r\n    while(i < pointer){\r\n        if(c[i] < i){\r\n            if(isEven(i)){\r\n                let temp = anyArray[i];\r\n                anyArray[i] = anyArray[0];\r\n                anyArray[0] = temp;\r\n            }\r\n            else{\r\n                let temp = anyArray[i];\r\n                anyArray[i] = anyArray[c[i]];\r\n                anyArray[c[i]] = temp;\r\n            }\r\n            //console.log(anyArray);\r\n            result.push([...anyArray]);\r\n\r\n            c[i] += 1;\r\n            i = 0;\r\n        }\r\n        else{\r\n            c[i] = 0;\r\n            i += 1;\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\n\r\n/*\r\n    Binary combination algorithms\r\n*/\r\n\r\n/**\r\n * \r\n * @param {array} anyArray Array of elements subject to combination\r\n * @param {'f' or 'b'} direction Combine forward or backward (default is 'f')\r\n * Returns an array of arrays that contains all possible combinations.\r\n */\r\nconst combAll = (anyArray, direction='f')=>{\r\n    let resultArray = [];\r\n    //anyArray.length-1, num_of_combinations = 2^(anyArray.length-1)\r\n    let arrLength = anyArray.length;\r\n    let num_of_combinations = Math.pow(2, arrLength) - 1;   \r\n\r\n    let tempArray = [];\r\n    if(direction==='f') tempArray = [...anyArray]\r\n    else tempArray=[...anyArray.reverse()];\r\n\r\n    for(let i = 1; i < num_of_combinations+1; i++){\r\n        //console.log(i, Number(i).toString(2).split(\"\"));\r\n        let compareString = Number(i).toString(2).split(\"\").reverse();          \r\n        let result = [];\r\n        for(let j = 0; j < arrLength; j++){\r\n            stringAND(tempArray[j], compareString[j])!=0 ? result.push(tempArray[j])  : null;\r\n        }\r\n        resultArray.push(result.reverse());\r\n    }\r\n\r\n    return resultArray;\r\n}\r\n\r\n/**\r\n * \r\n * @param {array} anyArray Array of elements subject to combinations\r\n * @param {'f' or 'b'} direction Combine forward or backward (default is 'f')\r\n * @param {boolean} strict  If strict is true, combinbinations are of exact lenght of length param, if false, combinations are less length than length param\r\n * @param {number} length Length of results.\r\n * Returns an array of arrays that contains all possible combinations whose length is definded by strict param less or exact length of given length\r\n */\r\nconst combAllStrict = (anyArray, direction='f', length, strict)=>{\r\n    let resultArray = [];\r\n    //anyArray.length-1, num_of_combinations = 2^(anyArray.length-1)\r\n    let arrLength = anyArray.length;\r\n    let num_of_combinations = Math.pow(2, arrLength) - 1;   \r\n\r\n    let tempArray = [];\r\n    if(direction==='f') tempArray = [...anyArray]\r\n    else tempArray=[...anyArray.reverse()];\r\n\r\n    for(let i = 1; i < num_of_combinations+1; i++){\r\n        //console.log(i, Number(i).toString(2).split(\"\"));\r\n        let compareString = Number(i).toString(2).split(\"\").reverse();          \r\n        let result = [];\r\n        for(let j = 0; j < arrLength; j++){\r\n            stringAND(tempArray[j], compareString[j])!=0 ? result.push(tempArray[j])  : null;\r\n        }\r\n        if(strict){\r\n            if(result.length===length) resultArray.push(result.reverse());\r\n        }\r\n        else{\r\n            if(result.length<=length) resultArray.push(result.reverse());\r\n        } \r\n    }\r\n\r\n    return resultArray;\r\n}\n\n//# sourceURL=webpack://proba_webpack/./node_modules/js-combperm/lib/es/comb.js?");

/***/ }),

/***/ "./src/components/Item/item.js":
/*!*************************************!*\
  !*** ./src/components/Item/item.js ***!
  \*************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (3:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| class Item extends HTMLElement{    \\n| \\n>     #shadowRoot = null;\\n|     #template = null;\\n|     #elementLabel = null;\");\n\n//# sourceURL=webpack://proba_webpack/./src/components/Item/item.js?");

/***/ }),

/***/ "./src/components/itemPicker/itemPicker.js":
/*!*************************************************!*\
  !*** ./src/components/itemPicker/itemPicker.js ***!
  \*************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (3:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| class ItemPicker extends HTMLElement{\\n| \\n>     #shadowRoot = null;\\n|     #template = '';\\n|     #elementsComponent = null;\");\n\n//# sourceURL=webpack://proba_webpack/./src/components/itemPicker/itemPicker.js?");

/***/ }),

/***/ "./src/storage/storage.js":
/*!********************************!*\
  !*** ./src/storage/storage.js ***!
  \********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (3:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| class Storage extends HTMLElement{\\n| \\n>     #storage = [];\\n| \\n|     constructor(){\");\n\n//# sourceURL=webpack://proba_webpack/./src/storage/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;