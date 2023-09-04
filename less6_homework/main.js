//1 - Знайти та вивести довижину настипних стрінгових значень
let object1 = 'hello world';
console.log(object1.length)
let object2 = 'lorem ipsum';
console.log(object2.length)
let object3 = 'javascript is cool';
console.log(object3.length)
//2- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log(object1.toUpperCase())
console.log(object2.toUpperCase())
console.log(object3.toUpperCase())
//3- Перевести до нижнього регістру настипні стрінгові значення
//
let obj1 = 'HELLO WORLD';
let obj2 = 'LOREM IPSUM';
let obj3 = 'JAVASCRIPT IS COOL';
console.log(obj1.toLowerCase())
console.log(obj2.toLowerCase())
console.log(obj3.toLowerCase())

//4 - Є "брудна" стрінга. Почистити її від зайвих пробілів.
let string = ' dirty string   '
console.log(string.substring(1, 13))

//5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
let stringToarray = (str) => {
    return str.split(' ')
}
console.log(stringToarray(str))

//6- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrOfNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrOfNUm2 = arrOfNum.map((num) => num + '')
console.log(arrOfNUm2)

//7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
let sorNums = (direction) => {
    if (direction === 'ascending') {
        console.log(nums)
    } else if (direction === 'descending') {
        console.log(nums.reverse())
    } else {
        console.log('error')
    }
    return nums
}

sorNums('descending')

//8- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  =========================
//  -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => {
    if (a.monthDuration < b.monthDuration) {
        return 1
    } else if (a.monthDuration > b.monthDuration) {
        return -1;
    }

    return 0;
}))


//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(x => x.monthDuration > 5)
console.log(filter)

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let updatedArr = coursesAndDurationArray.map((programmingLanguage) => {
    return {
        id: 'id', ...programmingLanguage,
        title: programmingLanguage.title,
        monthDuration: programmingLanguage.monthDuration
    }
})
console.log(updatedArr)

//9 описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================

let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'];
let colors = ['red', 'black'];

let deck = [];
for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        for (let k = 0; k < colors.length; k++) {
            let cardColor = (suits[i] === 'spade' || suits[i] === 'clubs') ? 'black' : 'red';

            let card = {
                suit: suits[i],
                value: values[j],
                color: cardColor
            }
            deck.push(card)

        }
    }
}
console.log(deck)

for (let i = 0; i < deck.length; i++) {
    if (deck[i].suit === 'spade' && deck[i].value === 'ace') {
        console.log(deck[i]);
    }
}
for (let i = 0; i < deck.length; i++) {
    if (deck[i].value === '6') {
        console.log(deck[i]);
    }
}
for (let i = 0; i < deck.length; i++) {
    if (deck[i].color === 'red') {
        console.log(deck[i]);
    }
}

for (let i = 0; i < deck.length; i++) {
    if (deck[i].suit === 'diamond') {
        console.log(deck[i]);
    }
}

for (let i = 0; i < deck.length; i++) {
    if (deck[i].suit === 'clubs' && deck[i].value !== '6' && deck[i].value !== '7' && deck[i].value !== '8' ) {
        console.log(deck[i]);
    }
}

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
 let reduce = deck.reduce((accumulator, card) => {
 if (card.suit === 'spade'){
     accumulator.spades.push(card)
 }else if (card.suit === 'heart'){
     accumulator.hearts.push(card)
 }else if (card.suit === 'diamond'){
     accumulator.diamonds.push(card)
 }else if (card.suit === 'clubs'){
     accumulator.clubs.push(card)
 }
return accumulator
    }, {spades: [], diamonds: [], hearts: [], clubs: []
})

console.log(reduce)

//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let filteredArray = coursesArray.filter(function(item) {
    return item.modules.includes('sass')
});

console.log(filteredArray)

let filteredArray2 = coursesArray.filter(function(item) {
    return item.modules.includes('docker')
});

console.log(filteredArray2)