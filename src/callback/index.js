// CALLBACK

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
};

console.log(calc(2, 2, sum));

// setTimeout

setTimeout(function() {
    console.log('hola javascript');
},2000)

//ejemplo 2 setTimeout

function saludo(name) {
    console.log(`Hola ${name}`);
}
setTimeout(saludo, 2000, 'Enzo');

