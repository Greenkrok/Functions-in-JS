// Задание 2! Массив уникальных случайных цифр.
// Создадим массив для семи элементов;
// Заполним его случайными цифрами от 0 до 10;
// Цифры в массиве не должны повторяться;
// Вывести этот массив в консоль;
// Упорядочить массив;
// Еще раз вывести его в консоль.

//Массив со случаными числами
let array = [];
function randomArray(array) {
    do {
        let randomNumber = Math.floor(Math.random()*10);
        if (array.indexOf(randomNumber) === -1) {
            array.push(randomNumber);
        }
    } while(array.length < 7)
    return array;
}

console.log(randomArray(array));

//Сортировка массива
function sortArray(array) {
    for(let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j + 1]) {
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
        return array;    
}

console.log(sortArray(array));
