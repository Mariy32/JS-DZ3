// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
// function calculateDegree (num){
//     degree = num*num*num;
//     console.log(`${num} в кубе равно ${degree}`);
// }
// calculateDegree(5);


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
// let num = prompt(`Введите размер заработной платы`)
//  if (num > 0) {
// function calculateRevenue (num){
//    income = num - (13*num)/100;
//      console.log(`Размер заработной платы за вычетом налогов равен ${income}`);
//   } 
// }
// else {
// console.log(`Вы ввели текст`);
// }
// calculateRevenue(num);

// let num = prompt(`Введите размер заработной платы`)
// function isNumeric(num) {
// 	return !isNaN(parseFloat(num)) && isFinite(num);
// }
// function calculateRevenue (num){
// income = num - (13*num)/100;
// console.log(`Размер заработной платы за вычетом налогов равен ${income}`);
// }
// isNumeric(num); 
// calculateRevenue(num);




// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
// let num1 = prompt(`Введите размер 1 число`)
// let num2 = prompt(`Введите размер 2 число`)
// let num3 = prompt(`Введите размер 3 число`)
// function maxNumber (num1, num2, num3){
// return Math.max(num1, num2, num3);
// } 
// alert(`Максильное из чисел ${num1}, ${num2}, ${num3} равно ${Math.max(num1, num2, num3)}`);
    

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let num1 = Number(prompt(`Введите размер 1 число`))
let num2 = Number(prompt(`Введите размер 1 число`))
function numSum(num1,num2){
sum = num1 + num2;
console.log(sum);
}
function numDif(num1,num2){
    if (num1 >= num2) {
        dif = num1 - num2;
        console.log(dif);
    } else {
        dif = num2 - num1;
        console.log(dif);
    } 
    }
    function numMult(num1,num2){
            multiplication = num1 * num2;
            console.log(multiplication);
        }
        function numQuot(num1,num2){
            quotient = num1 / num2;
            console.log(quotient);
        }
        numSum(num1,num2);
        numDif(num1,num2);
        numMult(num1,num2);
        numQuot(num1,num2);

