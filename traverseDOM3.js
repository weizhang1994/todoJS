let val;

const list  = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes
val = list.childNodes;


//Get children elements nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

//Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children;

//First child
val = list.firstChild;
val = list.firstElementChild;

//Last child
val = list.lastChild;
val = list.lastElementChild;

//Count child elements
val = list.childElementCount;

//Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
//Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);