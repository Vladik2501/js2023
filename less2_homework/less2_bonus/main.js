// 1. Створіть систему рівнів доступу, де користувач вводить свій рівень (admin, moderator, user)
//    і отримує відповідне повідомлення про доступні можливості для цього рівня.
// let userLevel = prompt('enter your user level:admin,moderator or user')
// if (userLevel === 'admin'){
//     console.log('you have access to everything')
// }else if(userLevel === 'moderator'){
//     console.log('you have partial access')
// }else if (userLevel === 'user'){
//     console.log('you only have access to user capabilities')
// }else{
//     console.log('you do not have access')
// }

// 2. Створіть програму для введення оцінки студента.
//    Виведіть повідомлення згідно з оцінкою, використовуючи конструкцію if-else
//    (наприклад, "Відмінно", "Добре", "Задовільно" тощо).
// let studentAssessment = +prompt('enter a job rating')
// if (studentAssessment > 9 && studentAssessment <= 12){
//     console.log('excellent work ',studentAssessment)
// }else if (studentAssessment >= 7 && studentAssessment <= 9){
//     console.log('good job ',studentAssessment)
// }else if (studentAssessment > 0 && studentAssessment <7 ){
//     console.log('it is a bad job ',studentAssessment)
// }else{
//     console.log('error')
// }


// 3. Створіть калькулятор вартості доставки залежно від введеної користувачем відстані.
//    Використовуйте конструкцію if-else для різних тарифів.
// let distanceDelivery = +prompt('enter a distance for delivery in km')
// if (distanceDelivery > 20 && distanceDelivery <= 25){
//     console.log('price-100$')
// }else if (distanceDelivery > 15 && distanceDelivery <= 20){
//     console.log('price-75$')
// }else if(distanceDelivery > 10 && distanceDelivery <= 15){
//     console.log('price-50$')
// }else if (distanceDelivery > 5 && distanceDelivery <= 10){
//     console.log('price-25$')
// }else{
//     console.log('error')
// }
//
//
// // 4. **** Створіть калькулятор підрахунку вартості товарів зі знижкою. За допомогою if-else перевіряйте,
// //         чи відповідає сума покупки певній умові для застосування знижки.
// let sumForDiscount = +prompt('enter the price of the product to determine the discount');
// if (sumForDiscount > 750){
//     console.log('discount = 15%',sumForDiscount - (sumForDiscount * 15 / 100))
// }else if (sumForDiscount < 750 && sumForDiscount >= 500){
//     console.log('discount = 10%',sumForDiscount - (sumForDiscount * 10 / 100))
// }else if (sumForDiscount < 500 && sumForDiscount >= 250){
//     console.log('discount = 10%',sumForDiscount - (sumForDiscount * 10 / 100))
// }else if (sumForDiscount < 250 && sumForDiscount >= 100){
//     console.log('discount = 5%',sumForDiscount - (sumForDiscount * 5 / 100))
// }
//

// 5. ***** Реалізуйте гру "Камінь, ножиці, папір" проти комп'ютера.
//           Використовуйте оператор if else та  switch для обробки можливих варіантів.

let playerChoise = prompt('для гри "Камінь, ножиці, папір",введіть один варіант з трьох можливих ')
let computerChoise = parseInt(Math.random()*100)
console.log(computerChoise)

if (computerChoise >= 0 && computerChoise <= 30){
    computerChoise = 'stone'
}else if (computerChoise > 30 && computerChoise <= 70){
    computerChoise = 'paper'
}else if (computerChoise > 70 && computerChoise <= 100) {
    computerChoise = 'snippers'
}

if ((playerChoise === 'paper' && computerChoise === 'stone')){
    console.log('гравець переміг,папір бє камінь')
}else if(playerChoise === 'stone' && computerChoise === 'snippers'){
    console.log('гравець переміг,камінь бє ножниці')
}else if (playerChoise === 'snippers' && computerChoise === 'paper'){
    console.log('гравець переміг,ножниці бють папір')
}else if (computerChoise === 'paper' && playerChoise === 'stone'){
    console.log('компютер переміг,папір бє камінь')
}else if(computerChoise === 'stone' && playerChoise === 'snippers'){
    console.log('компютер переміг,камінь бє ножниці')
}else if (computerChoise === 'snippers' && playerChoise === 'paper'){
    console.log('компютер переміг,ножниці бють папір')
}else {
    console.log('error')
}