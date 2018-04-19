//REPLACE ELEMENT

//Create Element
const newHeading = document.createElement('h2');
//Add id
newHeading.id = 'task-title';
//new text node
newHeading.appendChild(document.createTextNode('Hello World'));

//get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading);

//Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul'); 

//Remove list item 
 lis[0].remove();

 //Remove child element
 list.removeChild(lis[3]);

 //CLASSES & ATTR
 const firstLi = document.querySelector('li:first-child');
 const link = firstLi.children[0];

let val;

//classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;


//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
link.removeAttribute('title');
val = link.hasAttribute('title');

console.log(val);
//  console.log(firstLi.children[0]);


// console.log(newHeading);

