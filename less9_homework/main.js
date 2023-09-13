//1.0- створити блок,
//1.1 - додати йому класи wrap, collapse, alpha, beta
//1.2 - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//1.3 - додати цей блок в body.
//1.4 - клонувати його повністю, та додати клон в body.

let div1 = document.createElement("div")
div1.classList.add("wrap", "collapse", "alpha", "beta");
document.body.appendChild(div1)
let clone = div1.cloneNode()
document.body.appendChild(clone)

//2 - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let array1 = ['Main', 'Products', 'About us', 'Contacts']
let newArr = document.createElement("ul")
for (let i = 0; i < array1.length; i++) {
    let liOfUl = document.createElement("li")
    liOfUl.innerText = array1[i]
    newArr.appendChild(liOfUl);
}
document.body.appendChild(newArr);
console.log(newArr);

//3- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// =========================

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let divsWithInfo = [];
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let divWithInfo = document.createElement("div");
    divWithInfo.innerText = coursesAndDurationArray[i].title + ' ' + coursesAndDurationArray[i].monthDuration;

    divsWithInfo.push(divWithInfo);

    document.body.appendChild(divWithInfo);
}

console.log(divsWithInfo);

//4 - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// ==========================

let container = document.createElement("div");
container.className = "container"; // Можно добавить класс контейнера по желанию

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let course = coursesAndDurationArray[i];

    let itemDiv = document.createElement("div");
    itemDiv.className = "item";

    let heading = document.createElement("h1");
    heading.className = "heading";
    heading.textContent = course.title;

    let description = document.createElement("p");
    description.className = "description";
    description.textContent = `Duration: ${course.monthDuration} months`;

    itemDiv.appendChild(heading);
    itemDiv.appendChild(description);

    container.appendChild(itemDiv);
}

document.body.appendChild(container);



