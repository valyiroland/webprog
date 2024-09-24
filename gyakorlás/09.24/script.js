let a= 1
let b = "Szia"
let c = true
let d =  null
let e = undefined;


let tomb = [1,2,3,4,5]
tomb.push(6)
console.log(tomb[0])
console.log(tomb.length)
console.log(tomb);
let obj = {
    key1: 5,
    key2:"laci"
}
console.log(obj, obj.key1)

// if (c===null) {
//     alert(1)
// } else {
//     alert(2)
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (const iterator of object) {
    
// }

// while (condition) {
    
// }

// do {
    
// } while (condition);
console.log(a++);
console.log(++a);


//feladat

// let min= Number(prompt("Adja meg a minimum értéket"))
// let max= Number(prompt("Adja meg a minimum értéket"))
// let numbers= []
// for (let i = 0; i < max; i++) {
//  let random=Math.floor(Math.random() * (max - min + 1) + min);
//     numbers.push(random)
// }
// console.log(numbers);

let num1=  Number(prompt("Adjon meg egy számot:"))
let num2= Number(prompt("Adjon meg egy másik számot:"))

function szorzat(a,b) {
    return a*b
}

console.log(szorzat(num1,num2));

document.getElementById("container").style.width="100px"
document.getElementById("container").style.height="100px"
document.getElementById("container").style.backgroundColor="red"
document.getElementById("container").onclick=function(){
    document.getElementById("container").style.backgroundColor="green"

}
document.getElementById("container").onmouseenter=function(){
    document.getElementById("container").style.width=parseInt(document.getElementById("container").style.width)*1.1+"px"
    document.getElementById("container").style.height=parseInt(document.getElementById("container").style.height)*1.1+"px"
}

console.log(parseInt("100px"));

    










