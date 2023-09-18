//1 Створити форму з трьома полями для name,surname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================

function showFormData() {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age = document.getElementById('age').value;

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Ім'я: ${name}<br>Прізвище: ${surname}<br>Вік: ${age}`;
}


//2 є сторінка, на якій є блок, в кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================
let num1 = document.getElementById('num1')
let currentNumber = localStorage.getItem('currentNumber')
if (!currentNumber) {
    currentNumber = 0
} else {
    currentNumber = parseInt(currentNumber) + 1
}
let currentNumberElement = document.getElementById('currentNumber')
currentNumberElement.innerText = currentNumber;
localStorage.setItem('currentNumber', currentNumber.toString());


//3 Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
let currentDateTime = new Date().toLocaleString();

let sessions = JSON.parse(localStorage.getItem('sessions')) || [];

sessions.push(currentDateTime);

localStorage.setItem('sessions', JSON.stringify(sessions));


//4 зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let array100 = [];

for (let i = 0; i < 100; i++) {
    array100.push({ id: i + 1, name: `Item ${i + 1}` });
}

let currentPage = 0;
let itemsPerPage = 10;

function displayItems() {
    let startIndex = currentPage * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let itemsToDisplay = array100.slice(startIndex, endIndex);

    const resultDiv = document.getElementById('result2');
    resultDiv.innerHTML = '';

    itemsToDisplay.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.textContent = `ID: ${item.id}, Name: ${item.name}`;
        resultDiv.appendChild(itemDiv);
    });
}

function nextPage() {
    if (currentPage < Math.ceil(array100.length / itemsPerPage) - 1) {
        currentPage++;
        displayItems();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        displayItems();
    }
}

let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener('click', nextPage);

displayItems();



//5 - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let btn = document.getElementById('btn')
let text = document.getElementById('text')
btn.onclick = () => {
    if (text) {
        text.style.display = 'none'

    }
}


//6 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let btn2 = document.getElementById('btn2')
let input = document.getElementById('age2')
btn2.onclick = () =>{
    if (age2.value < 18){
alert('error')
    }

}


//7 *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let button1 = document.getElementById('button1');
let tableContainer = document.getElementById('tableContainer');

button1.addEventListener('click', function () {
    let rowCount = parseInt(input1.value);
    let cellCount = parseInt(input2.value);
    let cellContent = input3.value;

    if (!isNaN(rowCount) && !isNaN(cellCount) && rowCount > 0 && cellCount > 0) {
        let table = document.createElement('table');
        for (let i = 0; i < rowCount; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < cellCount; j++) {
                let cell = document.createElement('td');
                cell.textContent = cellContent;
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);
    } else {
        alert('Будь ласка, введіть коректні значення кількості рядків і ячеєк (цілі додатні числа).');
    }
});

//8 *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

function addPrice() {
    let priceElement = document.getElementById('price');
    let lastReloadTime = localStorage.getItem('lastReloadTime');

    if (lastReloadTime) {
        lastReloadTime = parseInt(lastReloadTime);
        let currentTime = Date.now();

        if (currentTime - lastReloadTime >= 10000) {
            let currentPrice = parseInt(priceElement.innerText);
            currentPrice += 10;
            priceElement.innerText = currentPrice + ' грн';

            localStorage.setItem('lastReloadTime', currentTime);
        }
    } else {
        localStorage.setItem('lastReloadTime', Date.now());
    }
}

addPrice();