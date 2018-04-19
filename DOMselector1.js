//document.getElementById()
// console.log(document.getElementById('task-title'));

// Get Things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

 const taskTitle = document.getElementById('task-title');

// //Change styling 
// taskTitle.style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

//Change content
// taskTitle.textContent = 'Task Risks';
// taskTitle.innerText = 'My Task';
// taskTitle.innerHTML = '<span style="color:red;">Task list</span>';
 

//document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'pink';
document.querySelector('li:nth-child(3)').style.color = 'pink';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = 'purple';
document.querySelector('li:nth-child(even)').style.background = '#ccc';