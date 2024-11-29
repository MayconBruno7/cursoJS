let arr = [4, 5, 'A', 10, 20, 35, 40, 5];

console.log(arr.lastIndexOf(5));

console.log(arr.includes(5));

console.log(arr.find(function(el){
    return el > 20;
}));

console.log(arr.findIndex(function(el){
    return el > 20;
}))

