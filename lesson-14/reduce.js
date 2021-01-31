const arr = [ 1, 2, 3, 12, 13, 6, 66 ];

function getSumm(arr) {
    let summ = 0;

    arr.forEach(num => {
        summ += num;
    });
    return summ;
}
/* console.log (getSumm(arr)); */

const users = [
    {
      name: 'rami',
      id: 1,
      posts: 13
    },
    {
      name: 'ann',
      id: 2,
      posts: 4
    },
    {
      name: 'petr',
      id: 3,
      posts: 5
    }
  ];
  
  console.log(users.map(user => user.posts).reduce( (acc, qua) => acc += qua), 0);