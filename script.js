// console.log(451);

/*
let obj = {
    fname: "jon",
    age: 16
}


   let food = ["aa", "bb", "cc"];
console.log(obj);
console.log(food[1]);
*/

/* function add(num1, num2) {
   num3 = num1 + num2;

   console.log(num3);

}
add(49, 89)

console.log(true == 5);
*/
let old = 20;
let type = old > 22 ? "20+" : "20-";

console.log(type);

/*

let money = 620;

switch (true) {

    case (money > 60000):
        console.log("ipone");
        break;

    case (money > 10000):
        console.log("android");
        break;


    case (money > 5000 && money < 10000):
        console.log("basic phone");
        break;

    default:
        console.log("no chocie");
}


for (let i = 0; i < 10; i++) {

    if (i % 2 == 1) {
        console.log(i);

    }
}

*/


/*
for (let key in person) {
    console.log(key + " " + person[key]);


}

function createperson(name) {
    return {
        name,
        greet() {
            let msg = `gdsg ${this.name}`;
            console.log(msg);

        }
    };
}
let aaa = createperson("aksksk");
aaa.greet();
*/
/*
const person = {
    name: "aaa",
    age: 12,
    job: "No job"
}

for (let key of Object.entries(person))
    console.log(key);


if ('studt' in person) {
    console.log("yes");

} else
    console.log("no");
*/

let fruits = ["sksk", "djf", "dldk"]

console.log(fruits.includes("sksk"));



let vegetables = [{ id: 1, item: "carrot", qty: 2 },
{ id: 2, item: "onion", qty: 6 },
{ id: 3, item: "tomato", qty: 3 }
]

let vegg = vegetables.findIndex(function (veg) {
    return veg.item == "tomato"
})

console.log(vegg);


let arr1 = ["rfk", "kdk", "dkdk"]
let arr2 = ["rgfk", "kiidk", "diitukdk"]

let arr3 = [...arr1, ...arr2]

console.log(arr3);
