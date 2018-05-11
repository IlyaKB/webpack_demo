import $ from 'jquery';
import Class1 from './js/class1.js';
import Function1 from './js/function1.js';
import "./css/style.css";

console.log("Started1!");

let class1 = new Class1();

addEventListener("load", ()=>{
    setInterval(()=>{
        $("#info").html( `result(class1)=${class1.method1(5, 2)}; result(function1)=${Function1(5)}` );
    }, 500);
});

if (module.hot) {
    module.hot.accept("./js/class1.js", function() {
        class1 = new Class1();
        console.log("Class1 changed!");
    });
    module.hot.accept("./js/function1.js", function() {
        console.log("Function1 changed!");
    });
}