// Объявляем переменные
let myInput = document.querySelector('input');
let doneItem = document.querySelector('.done');
let failedItem = document.querySelector('.failed');
let newItem = document.querySelector('.new-item');

// Срабатывание функции при клике по кнопке
document.querySelector('#do-btn').addEventListener('click', () => {
    addItem();
})

// Срабатывание функции при нажатии на Enter
myInput.addEventListener('keydown', (event) => {
    if ( event.key == 'Enter') {
        addItem();
    }
})


// создаём функцию добавления нового item 
function addItem() {

    // создаём новый элемент div и присваиваем ему класс
   let newDiv = document.createElement('div');
   newDiv.className = "new-item";

    // создаём новый элемент p и и меняем ему текст
   let newP = document.createElement('p');
   newP.textContent = `to ${myInput.value}`;

    // создаём новый элемент div и присваиваем ему класс
   let newAdditionalDiv = document.createElement('div');
   newAdditionalDiv.className = "new-item_additional";
   
    // создаём новые элементы i и присваиваем им классы
   let newI1 =document.createElement('i');
   newI1.className = "fas fa-check done show";
   let newI2 =document.createElement('i');
   newI2.className = "fas fa-times failed hide";
   let newI3 =document.createElement('i');
   newI3.className = "fas fa-trash trash";

    // добавляем два элемента newP, newAdditionalDiv в родителя newDiv с помощью append(можно много элементом указывать)
   newDiv.append(newP, newAdditionalDiv)

   // добавляем три элемента newI1, newI2, newI3 в родителя newAdditionalDiv с помощью append(можно много элементом указывать)
   newAdditionalDiv.append(newI1, newI2, newI3)

    //добавляем newDiv в конце родителя document.querySelector('.list') с помощью appendChild (добавить только один элемент можно)
   document.querySelector('.list').appendChild(newDiv);

    // После выполнения функции очищаем input
   myInput.value = '';
   
}

// надо сделать переборку события по всем элементам через for

// Обработка клика doneItem и добавление анимации 
doneItem.addEventListener('click', () => {
    doneItem.classList.toggle('show');
    doneItem.classList.toggle('hide');
    failedItem.classList.toggle('hide');
    failedItem.classList.toggle('show');
    newItem.classList.toggle('mission-completed');
})

// Обработка клика failedItem и добавление анимации 
failedItem.addEventListener('click', () => {
    doneItem.classList.toggle('show');
    doneItem.classList.toggle('hide');
    failedItem.classList.toggle('hide');
    failedItem.classList.toggle('show');
    newItem.classList.toggle('mission-completed');
})
