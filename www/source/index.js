'use strict';

//import $ from 'jquery';
import Class1 from './js/class1.js';
import {f1} from './js/function1.js';
//import "./css/style.css";

console.log("Web App Started1!");

/*if (NODE_ENV === 'development') { // TODO: Почему не преобразовывается в: if ('development' === 'development') {...} ?
    console.log("Mode set to development!");
}*/

let class1 = new Class1();
let class2lazy = null; // example, Editor

addEventListener("load", ()=>{

    /*document.getElementById("button2").onclick = () => {
        //loadClass2Lazy.then(module => {
        //    let Class2Lazy = module.default;
        //    class2lazy = new Class2Lazy();
        //    console.log(`class2lazy.method2(999)=${class2lazy.method2(999)}`);
        //});
    };*/

    setInterval(()=>{
        document.getElementById("info").innerHTML += `result(class1)=${class1.method1(5, 2)}; result(f1)=${f1(5)}\r\n`;
    }, 1000);
});

function loadClass2Lazy() {
    // TODO: Не работает из-за: 'import' and 'export' may only appear at the top level (34:4)
    //import('./js/class2lazy.js').then(module => {
    //    console.log("Class2Lazy loaded!");
    //}).catch((error) => { // .catch(error => 'An error occurred while loading the component');
    //    console.log(error);
    //});
}

if (module.hot) {
    module.hot.accept("./js/class1.js", function() {
        class1 = new Class1();
        console.log("Class1 changed!");
    });
    module.hot.accept("./js/function1.js", function() {
        console.log("Function1 changed!");
    });
}