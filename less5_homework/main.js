//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let func1 = (a, b) => a * b;
console.log('rectangle S:', func1(2, 5))

//2 - створити функцію яка обчислює та повертає площу кола з радіусом r
let func2 = (r) => 3.14 * (r * r);
console.log('circle S:', func2(5))

//3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let func3 = (h, r) => 2 * 3.14 * r * h + 2 * 3.14 * (r * r);
console.log('cylinder S:', func3(4, 3))

//4 - створити функцію яка приймає масив та виводить кожен його елемент
let func4 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log('arr number:', arr[i])

    }
}
func4([3, 4, 5, 6, 7, 8])

//5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let func5 = (paragraph) => {
    document.write(`<p>${paragraph}</p>`)

}
func5('Lorem ipsum dolor sit amet.')

//6 - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
let func6 = (textLi) => {
    document.write(`<ul>`)
//
    document.write(`<li>${textLi}</li>`)
    document.write(`<li>${textLi}</li>`)
    document.write(`<li>${textLi}</li>`)


    document.write(`</ul>`)

}

func6('hello world')


//7- створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let func7 = (textLi, repeat) => {
    document.write(`<ul>`)
    for (let i = 0; i < repeat; i++) {
        document.write(`<li>${textLi}</li>`)

    }

    document.write(`</ul>`)

}
func7('Lorem ipsum dolor sit amet.', 4)

//8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
let func8 = (arr) => {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)

    }
    document.write(`</ul>`)

}
func8([5, 4, 3, 2, 1, 77, 'true', false])

//9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrayForFunc = [
    {id: 1, name: "Roma", age: 27},
    {id: 2, name: "Vasya", age: 32},
    {id: 3, name: "Yura", age: 20}
]
let func9 = (arr) => {
    for (let arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
    }
}

func9(arrayForFunc)

//10 - створити функцію яка повертає найменьше число з масиву
let func10 = (arr) => {
    let minNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i]
        }
    }
    return minNum
}
console.log(func10([5, 4, 3, 6, 1, 3]))

//11- створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let func11 = (arr) => {
    let sum = 0
    for (let arrElement of arr) {
        sum = sum + arrElement
    }
    return sum
}

console.log(func11([2, 3, 4, 5]))

//12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let func12 = (arr, index1, index2) => {
    if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
                [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

    } else {
            console.log("error");

    }
    return arr
}
console.log(func12([11, 22, 33, 44], 1, 2))

//13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let func13 = (sumUAH,currencyValues,exchangeCurrency) =>{
    for (const item of currencyValues) {
        if (exchangeCurrency === item.currency) return sumUAH / item.value;
    }
}
let arr = [{currency: 'EUR', value: 42}, {currency: 'USD', value: 40}]
let res = func13(10000, arr, 'EUR')

console.log(res)