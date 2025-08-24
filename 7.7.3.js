//Задание 7.7.3
//Есть массив объектов, представляющих собой пользователей, каждый из которых имеет свойство age (возраст). 
// Создайте новый массив, содержащий только тех пользователей, чей возраст больше или равен 18. 
// Затем создайте новый массив, содержащий только свойства name (имя) каждого пользователя.

let users = [
    { name: 'Kate', age: 10 },
    { name: 'Anna', age: 30 },
    { name: 'Ivan', age: 40 },
    { name: 'Sasha', age: 16 }
];

let adults = users.filter(user => user.age >= 18);
console.log('Adults users:', adults);

let names = users.map(user => user.name);
console.log('Users names:', names);