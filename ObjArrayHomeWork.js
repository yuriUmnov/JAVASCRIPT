///******************Правельный ответ *******************/
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c= [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

sortStudentsByGroups(students);

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     });

//     volume = data.height * square;
//     console.log(data.budget - (volume * data.moneyPer1m3));

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }
// console.log(isBudgetEnough(shoppingMallData));


// ///2 задача на работу с объектами и массивами
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//      // Сначала сортируем массив студентов по алфавиту
//     const sortStudents = students.slice().sort();
//     // return sortStudents;
//     // Создаем массив для хранения групп
//     const groups = [];
//     // Разбиваем отсортированный массив на группы по 3 человека
//     for(let i = 0; i < sortStudents.length; i += 3) {
//         groups.push(sortStudents.slice(i, i + 3));
//     }

//     // Получаем оставшихся студентов
//     const remainingsStudents = groups.length > 3 ? groups.slice(3).reduce((acc, group) => acc.concat(group), []) : [];
//     const remainingMessage = remainingsStudents.length > 0 ? `Оставшиеся студенты: ${remainingsStudents.join(', ')}` : 'Оставшиеся студенты: -';

//     // Ограничиваем количество групп до 3 и добавляем сообщение о оставшихся студентах
//     return groups.slice(0, 3).concat(remainingMessage);

    
// }
// sortStudentsByGroups(students);
// console.log(sortStudentsByGroups(students));

// const studentus = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// console.log(sortStudentsByGroups(studentus));

// // Пример с добавлением одного студента
// const studentsWithExtra = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Somebody'];
// console.log(sortStudentsByGroups(studentsWithExtra));

// // Пример с удалением одного студента
// const studentsWithLess = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];
// console.log(sortStudentsByGroups(studentsWithLess));


