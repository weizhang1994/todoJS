let val;

val = document;
val = document.all;
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.images;

val = document.scripts[0];
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

//make scripts to array
let scriptsArr = Array.from(scripts);
//cause foreach only works for array
scriptsArr.forEach(function(script){
  console.log(script);
});


console.log(val);