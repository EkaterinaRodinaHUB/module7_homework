//Задание 7.7.5
//Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
// содержащий только уникальные числа, отсортированные в порядке возрастания.

function getUniqueNumbers(ar) {
    const uniqueNumbers = new Set(ar);
    const sortedUniqueNumbers = Array.from(uniqueNumbers).sort((a, b) => a - b);
    return sortedUniqueNumbers;
}

const numbers = [10, 10, 5, 20, 3];
console.log(getUniqueNumbers(numbers)); 