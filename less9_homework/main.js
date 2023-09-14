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
container.className = "container";

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


//5 - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// =========================
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (let i = 0; i < simpsons.length; i++) {
    let simpsonObj = document.createElement("div")
    simpsonObj.classList.add('member')

    let simpsonName = document.createElement('h1')
    simpsonName.innerText = simpsons[i].name;

    let simpsonSurname = document.createElement("h2");
    simpsonSurname.innerText = simpsons[i].surname;

    let simpsonAge = document.createElement("p");
    simpsonAge.innerText = `Age: ${simpsons[i].age}`;

    let simpsonInfo = document.createElement("p");
    simpsonInfo.innerText = simpsons[i].info;

    let simpsonPhoto = document.createElement("img");
    simpsonPhoto.src = simpsons[i].photo;

    simpsonObj.appendChild(simpsonName)
    simpsonObj.appendChild(simpsonSurname)
    simpsonObj.appendChild(simpsonAge)
    simpsonObj.appendChild(simpsonInfo)
    simpsonObj.appendChild(simpsonPhoto)

    document.body.appendChild(simpsonObj)
}

//6 Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
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
// {
//     title: 'JavaScript Complex',
//         monthDuration: 5,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
// },
let fatherDiv = document.createElement("div")
fatherDiv.classList.add('father')
let headDiv = document.createElement('div')
headDiv.classList.add('head')
let mainDiv = document.createElement("div")
mainDiv.classList.add('main')
let main1 = document.createElement("div")
let main2 = document.createElement("div")
main1.classList.add('main1')
main2.classList.add('main2')
let listDiv = document.createElement("div")
listDiv.classList.add('listDiv')
let list = document.createElement("ul")
list.classList.add('list')
fatherDiv.append(headDiv, mainDiv, listDiv)
mainDiv.append(main1, main2)
listDiv.append(list)
document.body.appendChild(fatherDiv)
        let course = coursesArray[1];

        let titleDiv = document.createElement("h1");
        titleDiv.innerText = course.title;

        let monthDiv = document.createElement("h2");
        monthDiv.innerText = course.monthDuration;

        let hourDiv = document.createElement("h2");
        hourDiv.innerText = course.hourDuration;

        let listItem = document.createElement('li');
        listItem.innerText = course.modules.join(', ');

    headDiv.appendChild(titleDiv);
    main1.appendChild(monthDiv);
    main2.appendChild(hourDiv);
    list.appendChild(listItem);



