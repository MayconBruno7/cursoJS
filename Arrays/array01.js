const arr = [1, 5, 10, "Olá", true];

let soNumeros = arr.some(function(el) {
    return typeof el === "number" && el > 20;
});

let arr1 = arr.filter(function(el, i, _arr) {
    // console.log(el);
    // console.log(i);
    // console.log(_arr);
    return typeof el === "number";
});

arr.forEach(function(el, i, _arr){
    return true;
    console.log(el, i);
});

arr1 = arr1.map(function(el, i, _arr) {
    return el * el;
});

console.log(arr);
console.log(arr1);
// console.log(arr2);