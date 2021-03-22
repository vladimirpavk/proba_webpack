/* import * as Main from './src/main.js';
 */
/* console.log(Main.saberi_sa_5(10)); */
import { combAll } from './bundle.js';
console.log(combAll(['a', 'c', 'd'], 'f'));

let numberElement = document.getElementById('my_number');
numberElement.innerText = Main.saberi_sa_5(12);

export const MyLuckyNumber = 7;