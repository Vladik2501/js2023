// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let listOfProducts = ['bread', 'eggs', 'milk', 'oil', 'meat', 'chocolate', 'vegetables', 'fruits', 'cheese', 'macaroni'];
console.log(listOfProducts[0])
console.log(listOfProducts[1])
console.log(listOfProducts[2])
console.log(listOfProducts[3])
console.log(listOfProducts[4])
console.log(listOfProducts[5])
console.log(listOfProducts[6])
console.log(listOfProducts[7])
console.log(listOfProducts[8])
console.log(listOfProducts[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let firtsBook = {
    title:'Harry Potter',
    pageCount: 314,
    genre: 'fantasy'

}
let secondBook = {
    title:'the picture of Dorian Grey',
    pageCount: 186,
    genre: 'fantasy'

}
let thirdBook = {
    title:'last inch',
    pageCount: 60,
    genre: 'drama'

}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let fourthBook = {
    title:'the great Gatsby',
    pageCount: 140,
    genre: 'drama',
    authors:{name: 'Francis Scott Fidgerald',age:89}

}
let fifthBook = {
    title:'Murder on the orient express',
    pageCount: 140,
    genre: 'detective',
    authors:{name: 'Agata Christie',age: 75}

}
let sixthbook = {
    title:'Sherlock Holmes',
    pageCount: 120,
    genre: 'detective',
    authors:{name:'Arthur Conan Doyle',age: 47}

}

// / - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
var users = [
    { name: "Іван", username: "ivan123", password: "qwerty123" },
    { name: "Марія", username: "maria456", password: "password456" },
    { name: "Петро", username: "petro789", password: "securepwd789" },
    { name: "Дмитро", username: "dima123", password: "securepwd789" },
    { name: "Aнатолій", username: "tolik333", password: "qwerty123" },
    { name: "Анастасія", username: "nastia678", password: "password456" },
    { name: "Юрій", username: "yura000", password: "securepwd789" },
    { name: "Святослав", username: "svatik4444", password: "qwerty123" },
    { name: "Генадій", username: "genadiy808", password: "password456" },
    { name: "Юля", username: "yulia10101", password: "securepwd789" },
];
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)



// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//     інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 7;
let a = [1, 0, -3];
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

if (a[1] !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 7;
if (time > 0 && time <= 15) {
    console.log('це перша чверть')
} else if (time > 15 && time <= 30) {
    console.log('це друга чверть')
} else if (time > 30 && time <= 45) {
    console.log('це третя чверть')
} else if (time > 45 && time <= 60) {
    console.log('це четверта чверть')
} else {
    console.log('ви щось наплутали')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
//     у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 17
if (day > 0 && day <= 10) {
    console.log('це перша декада')
} else if (day > 10 && day <= 20) {
    console.log('це друга декада')
} else if (day > 20 && day <= 31) {
    console.log('це третя декада')
}

// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//     (можна замість плану на день, назву дня англійською).
let dayOfWeek = 3;
switch (dayOfWeek) {

    case 1:
        console.log('Monday');
        break;

    case 2:
        console.log('Tuesday');
        break;

    case 3:
        console.log('Wednesday');
        break

    case 4:
        console.log('Thursday');
        break

    case 5:
        console.log('Friday');
        break

    case 6:
        console.log('Saturday')
        break

    case 7:
        console.log('Sunday')
        break

    default:
        console.log('???')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let firstNum = +prompt('введіть перше число')
let secondNum = +prompt('введіть друге число')

if (firstNum > secondNum){
    console.log('перше число більше ',firstNum)
}else if(secondNum > firstNum){
    console.log('друге число більше ',secondNum)
}else if (firstNum === secondNum){
    console.log('ці числа рівні ',firstNum + ' ' + secondNum)
}else {
    console.log('error')
}


//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let secondX = true;
if (!secondX || undefined || null || NaN){
    secondX = "default"
    console.log(secondX)
}else{
    console.log(secondX)
}


//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('супер ',coursesAndDurationArray[0])
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('супер ',coursesAndDurationArray[1])
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('супер ',coursesAndDurationArray[2])
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('супер ',coursesAndDurationArray[3])
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('супер ',coursesAndDurationArray[4])
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('супер ',coursesAndDurationArray[5])
}
