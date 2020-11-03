// Задание 1! Слова палиндромы.
// Узнать является ли строка палиндромом.
// Слово палиндром - может читаться справа-налево и слева-направо одинаково. Прим “шалаш”.

let str = prompt('Напишите слово для проверки на палиндром');
function palindrome() {
    let strReverse = str.split('').reverse().join('');
    if(strReverse == str) {
        alert( str + ' - палиндром ');
    }else {
        alert( str + ' - не палиндром ');
    }
}

palindrome();
