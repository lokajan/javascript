
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

/*

let food1 = document.getElementById("food");
let saved = document.getElementById("save");

let foodContainer = document.getElementById("foodContainer")








saved.addEventListener("click", () => {
    // alert("ur saved ")
    foodContainer.innerHTML += `<li>${food1.value}</li>`;


})
*/


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

