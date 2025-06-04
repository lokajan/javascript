
/*
window.prompt("name please");
window.alert("nbvj")
window.print("bnn")


console.log(screen.height, screen.width);



window.setInterval(() => {
location.href = "https://www.google.co.uk/"
}, 5000);
*/
/*

const person = {
    name: "aaaa",
    place: "wwww",
    greet() {
        return `my name is ${this.name} and im coming from ${this.place} //...`;

    }
};
let nameVar = prompt("what is ur name");
let placeVar = prompt("where r u from");

person.name = nameVar;
person.place = placeVar;

document.body.innerHTML = person.greet();
*/



let food1 = document.getElementById("food");
let saved = document.getElementById("save");

let foodContainer = document.getElementById("foodContainer")

saved.addEventListener("click", () => {
    // alert("ur saved ")
    foodContainer.innerHTML += `<li>${food1.value}</li>`;


})

/*

let mainn = document.getElementById("mainn");

function createElement1(message) {

    let div = document.createElement("div");
    let text1 = document.createTextNode(message);

    div.className = "alert";

    div.append(text1);
    mainn.prepend(div);

    mainn.append(div);
}
createElement1("fnsdgid")
/*

function temp(msg) {
    let template = `
<div>
<strong>
${msg}
</strong>
</div>

`;
    mainn.innerHTML += template;
}
temp("this is from tempory litteral....")


/*
let qs = document.querySelector(".alert1");

console.log(qs.innerHTML);

console.log(qs.innerText);
console.log(qs.textContent);



qs.innerHTML = "gfdg";
qs.innerText = "fsjg";
qs.textContent = "trytu";
*/
/*
let mainn = document.getElementById("mainn");
let fd = document.querySelector("#foodContainer");
console.log(fd);
/*
for (let i = 1; i <= 1000; i++) {

    let li = document.createElement("li")
    li.textContent = `food items:  ${i}`
    li.className = "fooditem";
    fd.append(li);

    console.log(li);

}
*/

/*
let frg = document.createDocumentFragment();

for (let i = 1; i <= 1000; i++) {

    let li = document.createElement("li")
    li.textContent = `food items:  ${i}`
    li.className = "fooditem";
    frg.append(li);

    console.log(li);

}
fd.append(frg);

*/
/*
for (i = 1; i < 11; i++) {
    let fav = document.createElement("li");
    fav.textContent = `fav food are ${i}`
    mainn.append(fav);


}


let frg = document.createDocumentFragment()

for (j = 1; j < 11; j++) {
    let new1 = document.createElement("li")
    new1.textContent = `hiii ${j}`
    frg.append(new1)
}
mainn.append(frg)
*/
/*
let li = document.createElement("li")
li.textContent = `food items1`
li.className = "fooditem";
fd.append(li);
fd.prepend(li);

fd.before(li);
fd.after(li);
*/
/*
let qs = document.querySelector(".foodContainer :first-child");
//console.log(qs);


let li1 = document.createElement("li")
li1.textContent = "parrupu samabar"

qs.replaceWith(li1);
*/

//let fd = document.querySelector("#foodContainer");
/*
let duplicate = document.getElementById("duplicate");
let btn = document.getElementById("sync");

btn.addEventListener("click", () => {
    duplicate.innerHTML = '';
    let cloneData = fd.cloneNode(true);

    duplicate.append(cloneData);


}
);
*/
//console.log(fd.childNodes);
//console.log(fd.firstElementChild.innerHTML);

/*
let num = document.querySelector("ul li")

console.log(num.parentElement);

console.log(num.nextSibling);
console.log(num.nextElementSibling);
console.log(num.previousElementSiblingSibling);
console.log(num.parentNode);

*/
/*
let namee = document.querySelector(".name");

console.log(namee);

console.log(namee.id);
console.log(namee.value);

let ahe = prompt("entert the age", "namee")

namee.setAttribute("value", ahe)
*/
/*
let button = document.querySelector(".input  button ")

console.log(button);

//button.setAttribute("style", "padding:10px; border: 5px;background-color:blue; ");

button.style.cssText = "padding:10px; border: 5px;background-color:green;"

*/
/*
let input1 = document.querySelector(".input name");

let showbtn = document.querySelector("#showbtn");


console.log(showbtn, input1);
*/

//

/*
showbtn.addEventListener("click", () => {

    if (input1.style.display == "none") {
        showbtn.innerText = "hide div"
        input1.style.display = "block";
    } else {
        showbtn.innerText = "show div"
        input1.style.display = "none";
    }

    console.log("jiiii");

})

*/
/*
let span = document.querySelector(".alert1 span");

console.log(span);


let spFn = ((event) => {
    //alert('u clicked it')
    console.log("hiiiii,,,....");

})
span.addEventListener("click", spFn);

setInterval(() => {
    span.removeEventListener("click", spFn);
}, 5000);

*/

let frm = document.querySelector("form");

let dv = document.querySelector("form div");

let p = document.querySelector("form p");

p.addEventListener("click", (event) => {
    alert("p....")
})

dv.addEventListener("click", (event) => {
    alert("div.....")
    event.stopPropagation();
})

frm.addEventListener("click", (event) => {
    alert("form....")
})
