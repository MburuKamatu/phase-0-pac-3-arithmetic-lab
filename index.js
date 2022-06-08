function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

let n= 1;
function increment(a){
    return (a+=1);
}

function decrement(a){
    return (a-=1);
}
increment(a);
decrement(a);
parseInt("2", 10);
parseInt("2.2222", 10);
function makeInt(a){
    parseInt(`${a}`, 10);
}
makeInt("Hello");
function preserveDecimal(string){
    parseFloat(`${string}`);
}
preserveDecimal("Hello Again");

function makeInt(string){
    parseInt(`${string}`);
}
makeInt("0x2328");