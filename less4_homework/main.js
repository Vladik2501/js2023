// // 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangleCalc(a, b) {
//     let rectangleS = a * b
//     return rectangleS
// }
//
// let firstRes = rectangleCalc(4, 6)
// console.log(firstRes)

// //2 - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circleCalc(r) {
//     let circleS = 3.14 * (r * r)
//     return circleS
// }
//
//let secondRes = circleCalc(4)
//concole.log(secindRec)
//
// //3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinderCalc(h, r) {
//     let cylinderS = 2 * 3.14 * r * h + 2 * 3.14 * (r * r)
//     return cylinderS
// }
//
// let thirdRes = cylinderCalc(3, 6)
//
// console.log(thirdRes)

// //4 - створити функцію яка приймає масив та виводить кожен його елемент
//
// function arrReceiver(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log('arr number:', arr[i])
//     }
// }
//
// arrReceiver([3, 45, 6, 77, 88, 99, 11])
//
//
// //5- створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function paragraphCreator(paragraph) {
//     document.write(`<p>${paragraph}</p>`)
//
//
// }
//
// paragraphCreator('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde.')
//
//
// //6- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function listCreator(text) {
//     document.write(`<ul>`)
//
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//
//
//     document.write(`</ul>`)
//
//
// }
//
// listCreator('hello world')
//
// //7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function listCreatorPro(text, repeat) {
//     document.write(`<ul>`)
//
//     document.write(`<li>${text}</li>`)
//     for (let i = 0; i < repeat; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//
//     document.write(`</ul>`)
//
//
// }
//
// listCreatorPro('hello okten', 4)
//
// //8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function listCreatorMax() {
//     let secondArr = Array.from(arguments)
//     document.write(`<ul>`)
//
//     for (let i = 0; i < secondArr.length; i++) {
//         document.write(`<li>${secondArr[i]}</li>`)
//     }
//
//     document.write(`</ul>`)
// }
//
// listCreatorMax(1, true, false, 'apple', 77, 'cars', 99)
//
// //9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// // Для кожного об'єкту окремий блок.
//
// let arrayForFunc = [
//     {id: 1, name: "Roma", age: 25},
//     {id: 2, name: "Vasya", age: 30},
//     {id: 3, name: "Yura", age: 22}
// ]
//
// function arrRecepient(arr) {
//     for (let element of arr) {
//         document.write(`<div>${element.id},${element.name},${element.age}</div>`)
//     }
//
// }
//
// arrRecepient(arrayForFunc)
//
// //10 - створити функцію яка повертає найменьше число з масиву
// function theSmallestNumFinder(arr) {
//     let smallestNum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < smallestNum) {
//             smallestNum = arr[i]
//         }
//
//     }
//     return smallestNum
//
// }
//
// let smallest = theSmallestNumFinder([2, 5, 6, 7, 8, 9, 1, 2])
//
// console.log(smallest)
//
// //11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// // Приклад sum([1,2,10]) //->13
//
// function sum(arr) {
//     let result = 0;
//     for (let arrElement of arr) {
//         result = result + arrElement
//     }
//     console.log(result)
// }
//
// sum([3, 4, 5, 6, 7])
//
// //12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2) {
//     if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
//         [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
//     } else {
//         console.log("error");
//     }
//
//     return arr;
// }
//
// let result = swap([2, 3, 5, 6, 7], 4, 3)
// console.log(result)
//13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {

    for (const item of currencyValues) {
     if(exchangeCurrency===item.currency) return sumUAH/item.value;
    }

}

let arr = [{currency: 'EUR',value: 42},{currency:'USD',value:40}]
let res = exchange(10000,arr , 'EUR')

console.log(res)