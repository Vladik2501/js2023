//1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(445, 'Vasya', 'Karpenko', 'vasya@gmail.com', 991901551)
console.log(user1)
let arrOfUsers = [
    new User(445, 'Svatik', 'Kovalenko', 'vasya@gmail.com', 991901551),
    new User(555, 'Vanya', 'Shevchenko', 'vanya@gmail.com', 991901551),
    new User(443, 'Roma', 'Morozov', 'roma@gmail.com', 991901551),
    new User(221, 'Vlad', 'Sokolov', 'vlad@gmail.com', 991901551),
    new User(49, 'Olexandr', 'Popov', 'olexandr@gmail.com', 991901551),
    new User(45, 'Kolya', 'Bondarenko', 'kolya@gmail.com', 991901551),
    new User(44, 'Mykola', 'Tkachenko', 'mykola@gmail.com', 991901551),
    new User(999, 'Sergiy', 'Kravchenko', 'sergiy@gmail.com', 991901551),
    new User(32, 'Danya', 'Ponomarenko', 'danya@gmail.com', 991901551),
    new User(89, 'Ostap', 'Kucher', 'ostap@gmail.com', 991901551),
]

console.log(arrOfUsers)

//2- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = arrOfUsers.filter((user) => user.id % 2 === 0)
console.log(filter)


//3- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortArr = arrOfUsers.sort((a, b) => {
    if (a.id > b.id) {
        return 1
    } else if (a.id < b.id) {
        return -1
    }
    return 0
})
console.log(sortArr)

//4- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'John', 'Smith', 'john@example.com', '555-123-4567', ['Book', 'Headphones', 'boots']),
    new Client(2, 'Alice', 'Johnson', 'alice@example.com', '555-234-5678', ['Laptop', 'Camera', 'book', 'key']),
    new Client(3, 'Robert', 'Brown', 'robert@example.com', '555-345-6789', ['Smartphone', 'Tablet']),
    new Client(4, 'Emma', 'Davis', 'emma@example.com', '555-456-7890', ['Headphones', 'Speakers']),
    new Client(5, 'Olivia', 'Wilson', 'olivia@example.com', '555-567-8901', ['Coffee Maker', 'Toaster', 'calculator']),
    new Client(6, 'Liam', 'Anderson', 'liam@example.com', '555-678-9012', ['Guitar', 'Amplifier']),
    new Client(7, 'Sophia', 'Martinez', 'sophia@example.com', '555-789-0123', ['Drone', 'VR Headset', 'tablet']),
    new Client(8, 'Noah', 'Jones', 'noah@example.com', '555-890-1234', ['Smartwatch', 'Fitness Tracker', 'case']),
    new Client(9, 'Ava', 'Taylor', 'ava@example.com', '555-901-2345', ['Hiking Boots', 'Backpack']),
    new Client(10, 'Mia', 'Parker', 'mia@example.com', '555-012-3456', ['Television', 'Game Console', 'backpack', 'pen', 'light'])
];

console.log(clients);


//5- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortArr2 = clients.sort((a, b) => {
    if (a.order.length > b.order.length) {
        return 1
    } else if (a.order.length < b.order.length) {
        return -1
    }
    return 0
})
console.log(sortArr2)


//6 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.driver = null;

    this.drive = () => {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = () => {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed}`);
        console.log(`Об'єм двигуна: ${this.engineVolume}`);
        if (this.driver) {
            console.log(`Водій: ${this.driver.name}`);
        }
    };

    this.increaseMaxSpeed = (newSpeed) => {
        this.maxSpeed += newSpeed;
        console.log(`Максимальна швидкість підвищена до ${this.maxSpeed}`);
    };

    this.changeYear = (newValue) => {
        this.year = newValue;
        console.log(`Рік випуску змінено на ${this.year}`);
    };

    this.addDriver = (driver) => {
        this.driver = driver;
        console.log(`Водій ${driver.name} доданий до автомобіля`);
    };
}

let car1 = new Car('mustang', 'ford', 2022, 220, 2.0);
let driver1 = {name: 'Vasya', age: 30};

car1.info();
car1.increaseMaxSpeed(20);
car1.changeYear(2023);
car1.addDriver(driver1);
car1.drive();

console.log(`--------------------------------`)

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class secondCar {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = null;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed}`);
        console.log(`Об'єм двигуна: ${this.engineVolume}`);
        if (this.driver) {
            console.log(`Водій: ${this.driver.name}`);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Максимальна швидкість підвищена до ${this.maxSpeed}`);
    }

    changeYear(newValue) {
        this.year = newValue;
        console.log(`Рік випуску змінено на ${this.year}`);
    }

    addDriver(driver) {
        this.driver = driver;
        console.log(`Водій ${driver.name} доданий до автомобіля`);
    }
}

let car2 = new Car('asx', 'Acura', 2022, 230, 2.0);
let driver2 = {name: 'ALex', age: 24};

car2.info();
car2.increaseMaxSpeed(20);
car2.changeYear(2023);
car2.addDriver(driver2);
car2.drive();

//7 -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

let arrayOfCindarella = [
    new Cinderella('Cindy1', 18, 35),
    new Cinderella('Cindy2', 19, 36),
    new Cinderella('Cindy3', 20, 37),
    new Cinderella('Cindy4', 21, 38),
    new Cinderella('Cindy5', 22, 39),
    new Cinderella('Cindy6', 23, 40),
    new Cinderella('Cindy7', 24, 35),
    new Cinderella('Cindy8', 25, 36),
    new Cinderella('Cindy9', 26, 37),
    new Cinderella('Cindy10', 27, 38)


]

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let foundedCindarella = (prince, arrayOfCindarella) => {
    for (let i = 0; i < arrayOfCindarella.length; i++) {
        if (prince.foundShoe === arrayOfCindarella[i].footSize) {
            return arrayOfCindarella[i]
        }

    }
}

let princeCharming = new Prince('Prince Charming', 25, 37);
let chosenCinderella = foundedCindarella(princeCharming, arrayOfCindarella);

if (chosenCinderella) {
    console.log(`Принц ${princeCharming.name} знайшов свою попелюшку: ${chosenCinderella.name}`);
} else {
    console.log(`Принц ${princeCharming.name} не знайшов відповідну попелюшку.`);
}

let findCinderellaForPrince = (prince, cinderellaArray) => {
    return cinderellaArray.find(cinderella => {
        return cinderella.footSize === prince.foundShoe && cinderella.age <= prince.age;
    });
};
if (chosenCinderella) {
    console.log(`Принц ${princeCharming.name} знайшов свою попелюшку 2: ${chosenCinderella.name}`);
} else {
    console.log(`Принц ${princeCharming.name} не знайшов відповідну попелюшку 2.`);
}
