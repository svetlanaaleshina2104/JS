//Напишите функции, работающие c "TODO-массивом".


const myGreatTODOArray = [
	{
    task: 'Помыть кота!',
    author: 'Petya'
  },
	{
    task: 'Купить кота!',
    author: 'Petya'
  },
	{
    task: 'Сделать ДЗ',
    author: 'Ivan'
  }
];

 /*  1. функция возвращает задачи из списка в виде одной строки
  потенциальная практика использования reduce */
function getAllTasksString( TODOArray ) {
  result = TODOArray.reduce(((acc, tasks)  => acc + tasks.task), '');
  console.log(result)
}

getAllTasksString(myGreatTODOArray);  // возвращает 'Помыть кота! Купить хлеб Сделать ДЗ'


  /* 2. функция возвращает все задачи из списка принадлежащие указанному автору
  потенциальная практика использования filter */
function getTasksByAuthor( TODOArray, author) {
  result = TODOArray.filter((todoArr => todoArr.author == author));
  console.log(result)
}

getTasksByAuthor(myGreatTODOArray, 'Ivan');   // возвращает [{ task: 'Сделать ДЗ', author: 'Ivan' }]


 /*  3. крайне примитивная функция поиска всех задач,
  в тексте которых есть запрошенное слово
  потенциальная практика с ... ? :) */
function findTasksByWord( TODOArray, searchString ) {
  result = TODOArray.filter((todoArr => todoArr.task.includes(searchString) ));
  console.log(result)
  /* return TODOArray.filter( TODOArray => TODOArray.task.includes(searchString) ); */
}

findTasksByWord(myGreatTODOArray, 'кот');  // возвращает 
// [
//   { task: 'Помыть кота!', author: 'Petya' },
//   { task: 'Купить кота!', author: 'Petya' }
// ]

/* 4. функция добавления нового элемента в массив  */
function addTask( TODOArray, newTask, newAuthor ) {
  let newTasks = {
    task: newTask,
    author: newAuthor
  }
  TODOArray.push(newTasks);
  console.log(TODOArray);
}

addTask(myGreatTODOArray, 'покормить кота', 'Sveta');
