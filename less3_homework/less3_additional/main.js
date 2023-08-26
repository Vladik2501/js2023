// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = ['java,js,html,css,python'];
// let arr3 = ['apple,grapes,', 6, 7, true,]
// console.log('arr1:', arr1)
// console.log('arr2:', arr2)
// console.log('arr3:', arr3)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArr = [];
// emptyArr[0] = 'sun';
// emptyArr[1] = false;
// emptyArr[2] = 65;
// emptyArr[3] = 'purple'
// emptyArr[4] = 77
// console.log(emptyArr)


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let arrOfNums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arrOfNums.length){
//     console.log(arrOfNums[i])
//
//     i++
// }

// 2. перебрати його циклом for
// for (let j = 0; j < arrOfNums.length; j++) {
//     console.log(arrOfNums[j])
// }

// 3. перебрати циклом while та вивести числа тільки з непарним індексом
// let i = 0;
// while (i <arrOfNums.length){
//     if (i % 3 === 0){
//         console.log(arrOfNums[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arrOfNums.length; i++) {
//     if (i % 3 === 0){
//         console.log(arrOfNums[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0
// while (i < arrOfNums.length){
//     if (i % 2) {
//         console.log(arrOfNums[i])
//     }
//     i++
//     }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arrOfNums.length; i++) {
//     if (i % 2) {
//         console.log(arrOfNums[i])
//     }
//
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arrOfNums.length; i++) {
//     if (i %  3 === 0){
//         arrOfNums[i] = 'okten'
//     }
//     console.log(arrOfNums[i])
// }

// 8. вивести масив в зворотньому порядку.
// for (let i = arrOfNums.length - 1; i >= 0; i--) {
//     console.log(arrOfNums[i])
//
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//1
// let i = arrOfNums.length - 1
// while (i >= 0){
//     console.log(arrOfNums[i])
//     i--
// }

//2
// for (let i = arrOfNums.length - 1; i >= 0; i--) {
//     console.log(arrOfNums[i])
// }

//3
// let i = arrOfNums.length - 1
// while (i >= 0){
//     if (i % 3 === 0){
//         console.log(arrOfNums[i])
//     }
//     i--
// }

//4
// for (let i = arrOfNums.length - 1; i >= 0; i--) {
//     if (i % 3 === 0){
//         console.log(arrOfNums[i])
//     }
//
// }

//5
// let i = arrOfNums.length - 1
// while (i >= 0){
//     if (i % 2){
//         console.log(arrOfNums[i])
//     }
//     i--
// }

//6
// for (let i = arrOfNums.length - 1; i >= 0; i--) {
//     if (i % 2) {
//         console.log(arrOfNums[i])
//     }
//
// }

//7
// for (let i = arrOfNums.length - 1; i >= 0; i--) {
//     if (i % 3 === 0){
//         arrOfNums[i] = 'okten'
//     }
//     console.log(arrOfNums[i])
// }


//1 - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let firstArr = ['one,two,three,four,five,six,seven,eight,nine,ten']
// for (let string of firstArr) {
//     console.log(string)
// }

//2- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//     let secondArr = [1,2,3,4,5,6,7,8,9,10]
// for (let number of secondArr) {
//     console.log(number)
// }

//3 - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let thirdArr = [true,false,4,8,3,77,999,' ','apple',null]
// for (let thirdArrElement of thirdArr) {
//     console.log(thirdArrElement)
// }

//4 - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let fourthArr = [6, 5, 9, 8, 76, false, true, 'ball,mind,sale']
// for (let fourthArrElement of fourthArr) {
//     if (typeof fourthArrElement === "boolean"){
//         console.log(fourthArrElement)
//     }
// }

//4.2 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (let fourthArrElement of fourthArr) {
//     if (typeof fourthArrElement === "number"){
//         console.log(fourthArrElement)
//     }
// }

//4.3 - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
// for (let fourthArrElement of fourthArr) {
//     if (typeof fourthArrElement === "string"){
//         console.log(fourthArrElement)
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

//     - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.
// let nullArr = [];
// nullArr[0] = 10;
// nullArr[1] = false;
// nullArr[2] = 'false';
// nullArr[3] = 22;
// nullArr[4] = 66;
// nullArr[5] = 77;
// nullArr[6] = 99;
// nullArr[7] = true;
// nullArr[8] = 'true';
// nullArr[9] = '55'
// for (let i = 0; i < nullArr.length; i++) {
//     console.log(nullArr[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
//     document.write(i, ' ')
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i)
//         document.write(i,' ')
//
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2) {
//     console.log(i)
//         document.write(i,' ')
// }


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// let books = [
//     {
//         title: "The Great Gatsby",
//         pageCount: 180,
//         authors: ["F. Scott Fitzgerald"],
//         genres: ["Fiction"]
//     },
//     {
//         title: "To Kill a Mockingbird",
//         pageCount: 324,
//         authors: ["Harper Lee", 'John'],
//         genres: ["Fiction", "Coming-of-Age"]
//     },
//     {
//         title: "The Lord of the Rings",
//         pageCount: 1178,
//         authors: ["J.R.R. Tolkien"],
//         genres: ["Fantasy",]
//     },
//     {
//         title: "Pride and Prejudice",
//         pageCount: 432,
//         authors: ["Jane Austen"],
//         genres: ["Romance"]
//     },
//     {
//         title: "The Hitchhiker's Guide to the Galaxy",
//         pageCount: 193,
//         authors: ["Douglas Adams"],
//         genres: ["Humor"]
//     }
// ]
// let bookWithTheLargestNumberOfGenres = books[0];
// let theBiggestBook = books[0];
// let bookWithLongestName = books[0];
// let bookWithTwoAuthors = books[0];
// let bookWithOneAuthor;
// for (let i = 0; i < books.length; i++) {
//  if (books[i].genres > bookWithTheLargestNumberOfGenres.genres){
// bookWithTheLargestNumberOfGenres = books[i]
//  }
//  if (books[i].pageCount > theBiggestBook.pageCount){
//      theBiggestBook =books[i]
//  }
//  if (books[i].title.length > bookWithLongestName.title.length){
//      bookWithLongestName = books[i]
//  }
//  if (books[i].authors > bookWithTwoAuthors ){
//      bookWithTwoAuthors = books[i]
//  }
//  if (books[i] !== bookWithTwoAuthors){
//      bookWithOneAuthor = books[i]
//  }
// }
// console.log(bookWithTheLargestNumberOfGenres)
// console.log(theBiggestBook)
// console.log(bookWithLongestName)
// console.log(bookWithTwoAuthors)
// console.log(bookWithOneAuthor)