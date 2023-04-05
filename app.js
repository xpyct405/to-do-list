// Объявляем переменные
let myInput = document.querySelector('input');
// let submitItem = document.querySelectorAll('.submit');
// let cancelItem = document.querySelectorAll('.cancel');
// let newItem = document.querySelectorAll('.new-item');
// let check = document.querySelectorAll('.check');

// Срабатывание функции при клике по кнопке
document.querySelector('#do-btn').addEventListener('click', () => {
    addItem();
})

// Срабатывание функции при нажатии на Enter
myInput.addEventListener('keydown', (event) => {
    if ( event.key == 'Enter') {
        addItem(); //Выполенится функция addItem()
    }
})


// создаём функцию добавления нового item 
function addItem() {

    // создаём новый элемент div и присваиваем ему класс
   let item = document.createElement('div');
   item.className = "new-item";

    // создаём новый элемент p и и меняем ему текст
   let text = document.createElement('p');
   text.textContent = `to ${myInput.value}`;

    // создаём новый элемент div и присваиваем ему класс
   let iconsContainer = document.createElement('div');
   iconsContainer.className = "new-item_additional";
   
    // создаём новые элементы i и присваиваем им классы
    // submitIcon
   let submitIcon =document.createElement('i');
   submitIcon.className = "fas fa-check submit show";

    // При клике по submitIcon произойдёт изменения стилей
   submitIcon.addEventListener('click', () => {
    submitIcon.classList.toggle('show');
    submitIcon.classList.toggle('hide');
    cancelIcon.classList.toggle('hide');
    cancelIcon.classList.toggle('show');
    item.classList.toggle('mission-completed');
   })

// cancelIcon
   let cancelIcon =document.createElement('i');
   cancelIcon.className = "fas fa-times cancel hide";
    // При клике по cancelIcon произойдёт изменения стилей
   cancelIcon.addEventListener('click', () => {
    submitIcon.classList.toggle('show');
    submitIcon.classList.toggle('hide');
    cancelIcon.classList.toggle('hide');
    cancelIcon.classList.toggle('show');
    item.classList.toggle('mission-completed');
   })

    // trashIcon
   let trashIcon =document.createElement('i');
   trashIcon.className = "fas fa-trash trash";
   // При клике по trashIcon произойдёт изменения стилей
   trashIcon.addEventListener('click', () => {
    item.remove();
   })
   

    // добавляем два элемента text, iconsContainer в родителя item с помощью append(можно много элементом указывать)
    item.append(text, iconsContainer)

   // добавляем три элемента submitIcon, cancelIcon, trashIcon в родителя iconsContainer с помощью append(можно много элементом указывать)
   iconsContainer.append(submitIcon, cancelIcon, trashIcon)

    //добавляем item в конце родителя document.querySelector('.list') с помощью appendChild (добавить только один элемент можно)
   document.querySelector('.list').appendChild(item);

    // После выполнения функции очищаем input
   myInput.value = '';
}